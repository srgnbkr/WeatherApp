import { WeatherData } from './../../models/weatherData';
import { WeatherService } from './../../services/weather-service/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  weatherData:WeatherData[];
  responsiveOptions;

  constructor(private weatherService:WeatherService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.weatherService.getWeather().subscribe(weatherData=>{
      this.weatherData = weatherData.result;
    })
  }

}
