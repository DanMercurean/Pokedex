import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
name: string;
REST_API: string = `https://pokeapi.co/api/v2/pokemon`;
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${offset}`);
  }

  // Get more Pokemons data 
getMoreData(name: string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}
getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.REST_API}`)
}
}
