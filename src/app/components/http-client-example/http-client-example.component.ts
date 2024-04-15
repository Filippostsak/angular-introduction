import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css',
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOninit() {
    this.jokesService.getDadJoke().subscribe;
  }
}
