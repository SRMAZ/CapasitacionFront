import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { CausesComponent } from './causes/causes.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LocationsComponent } from './locations/locations.component';
import { TicketsComponent } from './tickets/tickets.component';
import { InsertTicketComponent } from './tickets/insert-ticket/insert-ticket.component';

  
const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'Marcas-list',
              component: BrandsComponent,
          },
          {
              path: 'Causas-list',
              component: CausesComponent,
          },
          {
              path: 'Departamentos-list',
              component: DepartmentsComponent,
          },
          {
              path: 'Ticket-list',
              component: TicketsComponent,
          },
          {
              path: 'Ubicaciones-list',
              component: LocationsComponent,
          },
          {
              path: 'Levantamiendo-de-Ticket',
              component: InsertTicketComponent,
          },
          { path: '**', redirectTo: '' },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }