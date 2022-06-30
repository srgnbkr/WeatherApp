import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { WeatherData } from 'src/app/models/weatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl:string = `${environment.baseAPiUrl}weather/getWeather?data.lang=tr&data.city=`

  constructor(private httpClient:HttpClient) { }

  getWeather(cityName:string):Observable<ListResponseModel<WeatherData>>{
    return this.httpClient.get<ListResponseModel<WeatherData>>(this.apiUrl+cityName).pipe(res=>res);

  }
}
