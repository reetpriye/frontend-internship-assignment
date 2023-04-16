import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinderService {
  constructor(private http: HttpClient) {}

  findBooks(search: string): Observable<any> {
    const params = new HttpParams().set('q', search);
    return this.http.get('https://openlibrary.org/search.json', {
      params,
    });
  }
}
