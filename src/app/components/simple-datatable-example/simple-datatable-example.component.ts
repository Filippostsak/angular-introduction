import { Component } from '@angular/core';
import { ManyPerson } from '../../shared/interfaces/person';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css',
  imports: [SimpleDataTableComponent],
})
export class SimpleDatatableExampleComponent {
  manyperson = [...ManyPerson];
}
