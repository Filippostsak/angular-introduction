import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
  person = {
    givenName: 'Filippos',
    surName: 'Tsakiris',
    age: 17,
    email: 'filippostsak@gmail.com',
  };
}
