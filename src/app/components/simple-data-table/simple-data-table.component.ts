import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-data-table',
  standalone: true,
  imports: [CommonModule], // Make CommonModule available
  templateUrl: './simple-data-table.component.html',
  styleUrls: ['./simple-data-table.component.css'],
})
export class SimpleDataTableComponent {
  @Input() data: EPerson[] = [];

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  };

  sortData(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortBy).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }
    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none';
      }
    }
  }

  sortSign(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      return '↑';
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '↓';
    } else {
      return '';
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
