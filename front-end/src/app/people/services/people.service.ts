import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPeopleData } from '../model/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private readonly http: HttpClient) {}

  get() {
    return this.http.get<IPeopleData[]>('/api/pessoas/').pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  save(data: Partial<IPeopleData>) {
    return this.http.post<IPeopleData>('/api/pessoas', data);
  }
}
