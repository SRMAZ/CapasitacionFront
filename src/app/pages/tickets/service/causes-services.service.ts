import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CausesnModel } from '../models/CauseModel';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CausesServices {

  constructor(private http: HttpClient) { }
    async get() {
      return await firstValueFrom(this.http.get<CausesnModel[]>(`${environment.urlTickets}Causes/Get`));
    }
  
   async  add(Cause:CausesnModel) {
      return await firstValueFrom(this.http.post<CausesnModel[]>(`${environment.urlTickets}Causes/Add`, Cause));
    }
    async edit(Cause:CausesnModel) {
      return await firstValueFrom(this.http.put<CausesnModel[]>(`${environment.urlTickets}Causes/Update`, Cause));
    }
  
    async Delete(Cause:CausesnModel) {
      return await firstValueFrom(this.http.put<CausesnModel[]>(`${environment.urlTickets}Causes/Update/${Cause.causesId}}`,0));
    }
}
