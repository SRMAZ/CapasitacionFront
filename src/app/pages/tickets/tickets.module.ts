import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketsRoutingModule } from "./tickets-routing.module";
import { ComponentPrimeNg } from "src/app/components.primeng";
import { ReactiveFormsModule } from "@angular/forms";
import { BrandsComponent } from "./brands/brands.component";
import { CausesComponent } from "./causes/causes.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { LocationsComponent } from "./locations/locations.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { TicketDialogComponent } from "./tickets/Dialog/ticket.dialog.component";
import { InsertTicketComponent } from './tickets/insert-ticket/insert-ticket.component';

@NgModule({
    declarations: [
      BrandsComponent,
      CausesComponent,
      DepartmentsComponent,
      LocationsComponent,
      TicketsComponent,
      TicketDialogComponent,
      InsertTicketComponent
    ],
    imports: [
      CommonModule,
      TicketsRoutingModule,
      ComponentPrimeNg,
      ReactiveFormsModule
     ]
  })
  export class TicketsModule { }