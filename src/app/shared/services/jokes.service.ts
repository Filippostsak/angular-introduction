import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { chuckNorrisJoke, dadJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {} // Use constructor for HttpClient

  getDadJoke() {
    return this.http.get<dadJoke>(DAD_JOKES_API_URL, {
      headers: new HttpHeaders({ Accept: 'application/json' }),
    });
  }

  getChuckNorrisJoke() {
    return this.http.get<chuckNorrisJoke>(CHUCK_NORRIS_API_URL, {
      headers: new HttpHeaders({ Accept: 'application/json' }),
    });
  }
}
