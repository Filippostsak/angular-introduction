import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PersonTableComponent],
})
export class AppComponent {
  name = 'Tsakiris Filippos';
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
