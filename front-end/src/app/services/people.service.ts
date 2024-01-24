import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IPeopleData } from '../people/model/people';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly endpoint = '/api/pessoas';
  constructor(private readonly http: HttpClient) {}

  get(cpf?: string): Observable<IPeopleData[]> {
    let params;
    if (cpf) params = new HttpParams().append('cpf', cpf);

    return this.http.get<IPeopleData[]>(this.endpoint, { params }).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  save(data: Partial<IPeopleData>) {
    return this.http.post<IPeopleData>('/api/pessoas', data);
  }
}
