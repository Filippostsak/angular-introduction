import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Tsakiris Filippos';
  person = {
    givenName: 'Filippos',
    surName: 'Tsakiris',
    age: 17,
    email: 'filippostsak@gmail.com',
  };
}
