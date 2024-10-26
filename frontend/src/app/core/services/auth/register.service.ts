import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  public register = (user: any): Observable<any> => {
    return this.httpClient.post<any>(`http://localhost:3000/api/user/`, user);
  };
}
