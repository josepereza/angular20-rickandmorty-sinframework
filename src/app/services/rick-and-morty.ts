import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMorty {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api';

  getCharacters(searchTerm: string = ''): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/character/?name=${searchTerm}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
}
