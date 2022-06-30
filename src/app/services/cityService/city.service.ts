import { City } from './../../models/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCitiesList() {
    return this.http
      .get<any>('assets/data/turkey-city.json')
      .toPromise()
      .then((response) => response.data as City[])
      .then((data) => data);
  }
}
