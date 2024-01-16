import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LivresService {

  http = inject(HttpClient);

  getLivres(): Observable<any[]> {
    return this.http.get<any[]>('https://philippe.afpa-balma.fr/ng/json/books.json').pipe(map((data: any[]) => {
      console.log(data);
      return data;
    }))
  }
}

