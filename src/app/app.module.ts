import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {DropdownModule} from 'primeng/dropdown';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    MenubarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    CardModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
