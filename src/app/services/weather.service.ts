import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  http = inject(HttpClient);

  getWeather(): Observable<any> {
    return this.http.get<any>('https://www.prevision-meteo.ch/services/json/lourdes').pipe(map((data: any) => {
      console.log(data);
      return data;
    }))
  }
}

