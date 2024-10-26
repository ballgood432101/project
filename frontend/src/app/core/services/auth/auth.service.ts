import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: { username: string; password: string } | undefined;

  public get getUser() {
    return this.user;
  }

  constructor(private httpClient: HttpClient) {}

  public isLoggedIn = (): boolean => {
    return !!this.user;
  };

  public login = (user: {
    username: string;
    password: string;
  }): Observable<any> => {
    return this.httpClient
      .post<{
        message: string;
        user: { username: string; password: string; role: string };
      }>(`http://localhost:3000/api/user/login`, user)
      .pipe(
        tap((res) => {
          this.user = res.user;
          console.log(this.user);
        }),
        map((res) => res)
      );
  };
}
