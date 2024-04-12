import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { DocumentComponent } from '../document/document.component';
const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'ordenes-list',
              component: OrdersListComponent,
          },
          {
              path: 'ordenes-TypeDocument',
              component: DocumentComponent,
          },
          { path: '**', redirectTo: '' },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
