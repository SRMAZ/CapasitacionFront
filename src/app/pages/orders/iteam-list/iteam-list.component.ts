import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataModel } from '../models/data-model';
import { OrderService } from '../services/order.service';
import { Messages } from 'src/app/helpers/messages';

@Component({
  selector: 'app-iteam-list',
  templateUrl: './iteam-list.component.html',
  styleUrls: ['./iteam-list.component.scss']
})
export class IteamListComponent implements OnInit {

  
  @Output() ItemSelect = new EventEmitter<DataModel>();

  display: boolean;
  item: DataModel[] = [];
  loading: boolean = false;
  title: string = "Lista de Items"

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
    this.getItem();
  }

  async getItem() {
    this.loading = true;
    Messages.loading('Cargando...', '  Espere un momento');
    Messages.Toas('Test');
    this.item = await this.orderService.getItem();
    Messages.closeLoading();
    this.loading = false;
  }

  selectItem(item: DataModel) {

    this.display = false;
    this.ItemSelect.emit(item)
  }

}
