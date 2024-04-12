import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { BrandModel } from '../models/BrandModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BradsServices {

  constructor(private http: HttpClient) { }
    async get() {
      return await firstValueFrom(this.http.get<BrandModel[]>(`${environment.urlTickets}Brands/Get`));
    }
    async  add(Brands:any) {
      return await firstValueFrom(this.http.post<BrandModel[]>(`${environment.urlTickets}Brands/Add`, Brands));
    }
    
}
