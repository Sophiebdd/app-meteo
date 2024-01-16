import { Component, inject, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';
import { Book } from '../interfaces/book';


@Component({
  selector: 'app-listedeslivres',
  templateUrl: './listedeslivres.component.html',
  styleUrls: ['./listedeslivres.component.scss']
})
export class ListedeslivresComponent {
  service = inject(LivresService);
  books: Book[] = [];

  ngOnInit(): void {
    this.service.getLivres().subscribe({
      next: (data : Book[]) => {
        this.books = data;
      }
    })
  }
}

