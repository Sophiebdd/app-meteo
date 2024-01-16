import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class LivresService {

  http = inject(HttpClient);

  getLivres(): Observable<Book[]> {
    return this.http.get<Book[]>('https://philippe.afpa-balma.fr/ng/json/books.json').pipe(map((data: Book[]) => {
      console.log(data);
      return data;
    }))
  }
}

