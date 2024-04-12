import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketModel } from '../models/TicketModel';
import { FormBuilder } from '@angular/forms';
import { TicketsServices } from '../service/tickets-services.service';
import { Messages } from 'src/app/helpers/messages';
import { TicketDialogComponent } from './Dialog/ticket.dialog.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  @ViewChild(TicketDialogComponent) TicketDialog: TicketDialogComponent;

  loading: boolean = false;
  tickeList:TicketModel[]=[];
  title:string = "Listado de pedidos de compra"
  request:any;
  constructor(private form: FormBuilder, private service: TicketsServices) { }

  ngOnInit(): void {
    this._getDatos();
  }

  // Metodo que trae los datos
  async _getDatos(){
    try {
      this.loading = true;
      //Trae los datos de ticket
      this.request = await this.service.get();
      this.tickeList = this.request.dataResult;
      console.log(this.tickeList)
      //Trae los datos de Ubicacion
      //this.tickeList = await this.service.get();

      //Trae los datos de Departamento
      //this.tickeList = await this.service.get();
      this.loading = false;

    } catch (error) {
      Messages.warning("Advertencia", "¡Ha ocurrido un error, contáctese con un administrador!");
      this.loading = false;
    }
  }

  addTicket(){
    this.TicketDialog.showDialog(new TicketModel(), true);
  }

}
