import { Component, inject } from '@angular/core';
import { CulturaleventService } from '../services/culturalevent.service';
import { Culturalevent } from '../interfaces/culturalevent';

@Component({
  selector: 'app-culturalevent',
  templateUrl: './culturalevent.component.html',
  styleUrls: ['./culturalevent.component.scss']
})
export class culturaleventComponent {
  service = inject(CulturaleventService);
  //events: Culturalevent[] | undefined = undefined;
  evenements: Culturalevent[] = [];
  today: Date = new Date();
  date: string = "";
  // menu déroulant : [ option 1, option 2 etc...]

  ngOnInit(): void {
    let mois = (this.today.getMonth() < 10) ? "0" + (this.today.getMonth() + 1) : this.today.getMonth() + 1;
    this.date = this.today.getFullYear() + "-" + mois + "-" + this.today.getDate();
    this.service.getCulturalevent().subscribe({
      next: (data: Culturalevent[]) => {
        //this.events = data;
        let event: any;
        //this.date = "2024-02-04";
        for (event of data) {
          if (event.datefin > this.date && event.datedebut <= this.date)
            this.evenements.push(event);
        }
        console.log(this.evenements);
      }
    })
  }
}
