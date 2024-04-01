import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css',
  imports: [PersonTableComponent],
})
export class ComponentInputExampleComponent {
  person0 = {
    givenName: 'Filippos',
    surName: 'Tsakiris',
    age: 17,
    email: 'filippostsak@gmail.com',
    address: 'Athens, Greece',
  };
  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@gmail.com',
    address: 'New York, USA',
  };
}
