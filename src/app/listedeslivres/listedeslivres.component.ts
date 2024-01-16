import { Component, inject, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-listedeslivres',
  templateUrl: './listedeslivres.component.html',
  styleUrls: ['./listedeslivres.component.scss']
})
export class ListedeslivresComponent {
  service = inject(LivresService);
  books: any[]=[];

  ngOnInit(): void{
    this.service.getLivres().subscribe({
      next:(data) => {
      this.books=data;
      }
    })
  }
}

