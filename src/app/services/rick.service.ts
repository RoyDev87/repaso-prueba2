import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  
  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient  //injeccion de dependencias
  ) { }

  getCharacters() {
    return this.http.get(`${this.BASE_URL}/character`);
  }
}
