import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'havadurumu', component: WeatherInfoComponent },
  {path:'havadurumu/:cityName',component: WeatherInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
