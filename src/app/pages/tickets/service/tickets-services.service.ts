import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/TicketModel';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TicketsServices {

  constructor(private http: HttpClient) { }
  async get() {
    return await firstValueFrom(this.http.get<TicketModel[]>(`${environment.urlTickets}ReturnsTickets/Get`));
  }

 async  add(user:TicketModel) {
    return await firstValueFrom(this.http.post<TicketModel[]>(`${environment.urlTickets}ReturnsTickets/Add`, user));
  }
  async edit(user:TicketModel) {
    return await firstValueFrom(this.http.put<TicketModel[]>(`${environment.urlTickets}ReturnsTickets/Update`, user));
  }

  async Delete(user:TicketModel) {
    return await firstValueFrom(this.http.put<TicketModel[]>(`${environment.urlTickets}ReturnsTickets/Update/${TicketModel}`,0));
  }
  
}
