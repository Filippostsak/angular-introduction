import { Component } from '@angular/core';
import { EPerson } from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrls: ['./component-output-example.component.css'],
})
export class ComponentOutputExampleComponent {
  manyPerson: EPerson[] = [];
  selectedPerson: EPerson | null = null;

  onPersonClicked(person: EPerson): void {
    this.selectedPerson = person;
  }

  personTemplate(person: EPerson): string {
    return `
    Person Details:

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `;
  }
}
