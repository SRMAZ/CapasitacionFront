import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DepartmentModel } from '../models/DepartmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServices {

  constructor(private http: HttpClient) { }
  async get() {
    return await firstValueFrom(this.http.get<DepartmentModel[]>(`${environment.urlTickets}Departments/Get`));
  }

 async  add(Departament:DepartmentModel) {
    return await firstValueFrom(this.http.post<DepartmentModel[]>(`${environment.urlTickets}Departments/Add`, Departament));
  }
  async edit(Departament:DepartmentModel) {
    return await firstValueFrom(this.http.put<DepartmentModel[]>(`${environment.urlTickets}Departments/Update`, Departament));
  }

  async Delete(Departament:DepartmentModel) {
    return await firstValueFrom(this.http.put<DepartmentModel[]>(`${environment.urlTickets}Departments/Update/${Departament.departmentId}}`,0));
  }
}
