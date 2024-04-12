import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderModel } from '../models/order-models';
import { OrderService } from '../services/order.service';
import { Messages } from 'src/app/helpers/messages';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { OrderList } from 'primeng/orderlist';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  // DIRECTIVAS PARA COMUNICAR ENTRE COMPONENTES
  @ViewChild(OrderDialogComponent) orderDialog:OrderDialogComponent;

  loading: boolean = false;
  orderList:OrderModel[]=[];
  title:string = "Listado de pedidos de compra";
  formFilter: FormGroup;
  constructor(private orderService: OrderService, private form:FormBuilder) { }

  ngOnInit(): void {
    this.createFormFilter();
  }

  createFormFilter(){
    this.formFilter = this.form.group({
      from: [new Date().toISOString().substring(0.10), Validators.required],
      to:   [new Date().toISOString().substring(0.10), Validators.required]
    })
  }

 

  async getOrder(){
   try {

     this.loading = true;
     Messages.loading('Cargando...','  Espere un momento');
     Messages.Toas('Test');
     this.orderList = await this.orderService.getOrderByDate(this.formFilter.value.from, this.formFilter.value.to);
     Messages.closeLoading();
     this.loading = false;

   } catch (error) {
    Messages.closeLoading();
    Messages.warning(error);
   }

  }


  addOrder(){
    this.orderDialog.showDialog(true);
  }

  orderModify(orderlist:OrderModel[]){
    this.orderList = orderlist;
  }

}
