import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentPrimeNg } from 'src/app/components.primeng';
import { IteamListComponent } from './iteam-list/iteam-list.component';



@NgModule({
  declarations: [
    OrdersListComponent,
    SupplierListComponent,
    OrderDialogComponent,
    IteamListComponent
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ComponentPrimeNg,
    ReactiveFormsModule
   ]
})
export class OrdersModule { }
