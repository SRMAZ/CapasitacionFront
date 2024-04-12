import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataModel } from '../models/data-model';
import { OrderService } from '../services/order.service';
import { Messages } from 'src/app/helpers/messages';
import { Data } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  @Output() SupplierSelect = new EventEmitter<DataModel>();

  display: boolean;
  supplier: DataModel[] = [];
  loading: boolean = false;
  title: string = "Lista de Proveedores"

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
    this.getSupplier();
  }

  async getSupplier() {
    this.loading = true;
    Messages.loading('Cargando...', '  Espere un momento');
    Messages.Toas('Test');
    this.supplier = await this.orderService.getSupplier();
    console.log()
    Messages.closeLoading();
    this.loading = false;
  }

  selectSupplier(supplier: DataModel) {

    this.display = false;
    this.SupplierSelect.emit(supplier)
  }

}
