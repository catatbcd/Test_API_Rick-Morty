import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getAllCharacters(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }
  getCharactersByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/?name=${name}`;
    return this.http.get<any>(url);
  }
  getCharactersByNameAndPage(name: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name=${name}&page=${page}`);
  }
  // Obtener un solo episodio
  getEpisode(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  // Obtener varios episodios usando forkJoin
  getEpisodes(urls: string[]): Observable<any[]> {
    return forkJoin(urls.map(url => this.getEpisode(url)));
  }
}
