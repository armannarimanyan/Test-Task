import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getPokeData(): Observable<any> {
   return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=400&offset=300')
  }

  getPoke(event:string): Observable<any> {
    return this.http.get<any>(event)
  }

}
