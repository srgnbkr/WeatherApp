import { CityService } from './../../services/cityService/city.service';
import { City } from './../../models/city';
import { WeatherData } from './../../models/weatherData';
import { WeatherService } from './../../services/weather-service/weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  weatherData: WeatherData[];
  cities: City[];
  responsiveOptions;
  currentCity: City;

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.getListCity();
    this.activatedRoute.params.subscribe((params) => {
      if (params['cityName']) {
        this.getWeatherCityName(
          this.activatedRoute.snapshot.paramMap.get('cityName')
        );
      }
    });
  }

  getWeatherCityName(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe((weather) => {
      this.weatherData = weather.result;
      console.log(this.weatherData);
    });
  }

  getListCity() {
    this.cityService.getCitiesList().then((response) => {
      this.cities = response;
    });
  }

  setCurrentCity(city: City) {
    this.currentCity = city;
  }
}
