import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Culturalevent } from '../interfaces/culturalevent';

@Injectable({
  providedIn: 'root'
})
export class CulturaleventService {

  http = inject(HttpClient);

  getCulturalevent(): Observable<Culturalevent[]> {
    return this.http.get<any>('https://opendata.ha-py.fr/api/explore/v2.1/catalog/datasets/departementdeshautespyrenees_fetes_manifestations/records?limit=20').pipe(map((data: any) => {
      
      let resultat: Culturalevent[] = [];
      for (let i = 0; i < data.results.length; i++) {
        let r: Culturalevent = {
          datedebut: data.results[i].datedebut,
          datefin: data.results[i].datefin,
          heuredebut1: data.results[i].heuredebut1,
          heurefin1: data.results[i].heurefin1,
          nom_manifestation: data.results[i].nom_manifestation,
          categorie: data.results[i].categorie,
          theme: data.results[i].theme,
          commune: data.results[i].commune,
          description: data.results[i].description,
          tarifs: data.results[i].tarifs,
          site_web: data.results[i].site_web,
          photos: data.results[i].photos,
          longitude: data.results[i].longitude,
          latitude: data.results[i].latitude,
        }
        
        resultat.push(r);
      }
      
      return resultat;
    }))
  }
}
