import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  public getFoods = (): Observable<any> => {
    return this.httpClient.get<any>(`http://localhost:3000/api/food`);
  };
}
