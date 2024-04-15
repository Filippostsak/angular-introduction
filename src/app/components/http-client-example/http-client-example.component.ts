import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { chuckNorrisJoke, dadJoke } from '../../shared/interfaces/jokes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css'],
})
export class HttpClientExampleComponent implements OnInit {
  dadJoke: string;
  chuckNorrisJoke: string;

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    // this.jokesService.getDadJoke().subscribe((data: dadJoke) => {
    //   console.log(data.joke);
    //   this.dadJoke = data.joke;
    // });
    this.refreshDadJoke();

    this.jokesService
      .getChuckNorrisJoke()
      .subscribe((data: chuckNorrisJoke) => {
        console.log(data.value);
        this.chuckNorrisJoke = data.value;
      });
  }
  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data: dadJoke) => {
      this.dadJoke = data.joke;
    });
  }
  refreshChuckNorrisJoke() {
    this.jokesService
      .getChuckNorrisJoke()
      .subscribe((data: chuckNorrisJoke) => {
        this.chuckNorrisJoke = data.value;
      });
  }
}
