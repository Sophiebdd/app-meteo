import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'app-meteolourdes',
  templateUrl: './meteolourdes.component.html',
  styleUrls: ['./meteolourdes.component.scss']
})
export class meteolourdesComponent {
  service = inject(WeatherService);
  meteox: any = undefined;


  ngOnInit(): void {
    this.service.getWeather().subscribe({
      next: (data : any) => {
        this.meteox = data;
        console.log(this.meteox);
      }
    })
  }
}




