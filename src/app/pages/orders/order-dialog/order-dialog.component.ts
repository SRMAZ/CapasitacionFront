import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { OrderModel } from '../models/order-models';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/users/auth.service';
import { OrderDetailModel } from '../models/order-details';
import { SupplierListComponent } from '../supplier-list/supplier-list.component';
import { DataModel } from '../models/data-model';
import { IteamListComponent } from '../iteam-list/iteam-list.component';
import { Messages } from 'src/app/helpers/messages';
import { LandingComponent } from 'src/app/components/landing/landing.component';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {
  @ViewChild(SupplierListComponent) supplierlist: SupplierListComponent
  @ViewChild(IteamListComponent) IteamList: IteamListComponent
  @Output() OrderModify = new EventEmitter<OrderModel[]>();

  display: boolean = false;
  title: string = "";
  loading: boolean = false;
  order: OrderModel = new OrderModel();
  orderDetail: OrderDetailModel[] = [];
  formOrder: FormGroup;
  isAdd: boolean = false;
  user: User;

  totalQty: number = 0;
  total: number = 0;
 
  constructor(private orderService: OrderService, private formBuilder: FormBuilder, private authService: AuthService) {
    this.user = authService.UserValue;
  }

  ngOnInit(): void {
  }

  showDialog(isAdd: boolean) {
    this.isAdd = isAdd;
    this.display = true;
    this._createForm();
  }
  _createForm() {

    this.formOrder = this.formBuilder.group({
      id: [this.order.id ?? 0],
      cardCode: [this.order.cardCode ?? "", Validators.required],
      cardName: [this.order.cardName ?? "", ''],
      docTotal: [this.order.docTotal ?? 0, Validators.required],
      reference: [this.order.reference ?? "", Validators.required],
      createdBy: [this.order.createdBy ?? 0],
      comentario: "",
      detail: []
    });
  }
  showDialogSupplier() {
    this.supplierlist.showDialog();
  }


  selectSupplier(supplier: DataModel) {
    this.order.cardCode = supplier.code;
    this.order.cardName = supplier.name;
    this._createForm();
  }

  showDialogItem() {
    this.IteamList.showDialog();
  }

  selectItem(Item: DataModel) {

    this.orderDetail.push(new OrderDetailModel({
      itemCode: Item.code,
      iteamName: Item.name,
      quantity: 1,
      price: 0,
      lineTotal: 0

    }))

  }

  calculate() {
    setTimeout(() => {
      console.log("edita")
      this.orderDetail.forEach(x => x.lineTotal = x.quantity * x.price);
      this.totalQty = this.orderDetail.reduce((accum, item) => accum + item.quantity, 0);
      this.total = this.orderDetail.reduce((accum, item) => accum + item.lineTotal, 0);
    }, 500);
  }

 async add(){
    try{
      Messages.loading('Agregando','se esta agregando la orden')
      if(this.formOrder.valid){
        let newEntry = this.formOrder.value as OrderModel;
        newEntry.detail = this.orderDetail;
        newEntry.docTotal = this.total
        this.formOrder.value.docDate = new Date().toISOString()
        this.display = false;
        this.orderDetail=[];
        newEntry.createdBy = 1

        let result = await this.orderService.addOrder(newEntry)
        this.OrderModify.emit(result);

        Messages.closeLoading()
      }
    }catch(x){
      Messages.closeLoading()
      Messages.warning('contactese con el administrador')
    }
  }

}
