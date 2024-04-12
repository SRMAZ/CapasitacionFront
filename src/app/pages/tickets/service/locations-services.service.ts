import { Injectable } from '@angular/core';
import { LocationModel } from '../models/LocationModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsServices {

  constructor(private http: HttpClient) { }
  async get() {
    return await firstValueFrom(this.http.get<LocationModel[]>(`${environment.urlTickets}Locations/Get`));
  }

 async  add(Location:LocationModel) {
    return await firstValueFrom(this.http.post<LocationModel[]>(`${environment.urlTickets}Locations/Add`, Location));
  }
  async edit(Location:LocationModel) {
    return await firstValueFrom(this.http.put<LocationModel[]>(`${environment.urlTickets}Locations/Update`, Location));
  }

  async Delete(Location:LocationModel) {
    return await firstValueFrom(this.http.put<LocationModel[]>(`${environment.urlTickets}Locations/Update/${Location.locationId}`,0));
  }
}
