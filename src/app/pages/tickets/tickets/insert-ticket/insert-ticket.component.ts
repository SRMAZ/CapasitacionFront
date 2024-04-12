import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Messages } from 'src/app/helpers/messages';
import { TicketsServices } from '../../service/tickets-services.service';
import { CommonService } from 'src/app/service/common.service';
import { DepartmentServices } from '../../service/department-services.service';
import { CausesServices } from '../../service/causes-services.service';
import { LocationsServices } from '../../service/locations-services.service';
import { BradsServices } from '../../service/brads-services.service';
import { CausesnModel } from '../../models/CauseModel';
import { LocationModel } from '../../models/LocationModel';
import { TicketModel } from '../../models/TicketModel';
import { DepartmentModel } from '../../models/DepartmentModel';

@Component({
  selector: 'app-insert-ticket',
  templateUrl: './insert-ticket.component.html',
  styleUrls: ['./insert-ticket.component.scss']
})
export class InsertTicketComponent implements OnInit {

  @Output() TicketModify = new EventEmitter<TicketModel[]>();
  formTicket: FormGroup;
  Ticket: TicketModel;
  Department: DepartmentModel[] = [];
  Causes: CausesnModel[] = [];
  Location: LocationModel[] = [];
  isAdd: boolean;
  loading: boolean = false;
  display: boolean = false;


  constructor( private fb: FormBuilder, 
               private TicketService: TicketsServices, 
               private commonService: CommonService,
               private DepartmentService: DepartmentServices,
               private CauseService: CausesServices,
               private LocationService:LocationsServices,
               private BrandService: BradsServices) {}

  ngOnInit() {

  }


  async _getDdls(){
      try{
          this.loading = true;
          //Trae los datos de  la lista desplegable
          
          let departamentData:any = await this.DepartmentService.get()
          this.Department = departamentData.dataResult;
          console.log(this.Department)
          let causeData:any = await this.CauseService.get();
          this.Causes = causeData.dataResult;

          let locatioinData:any = await this.LocationService.get();
          this.Location = locatioinData.dataResult;

          //Asigna valores de default a las listas desplegbles
           this.Department.unshift({
               departmentId: 0, name: "Seleccione un Departamento", isActive: true,
               createBy: undefined,
               createUser: '',
               createDate: undefined,
               modifiedBy: 0,
               modifiedUser: '',
               modifiedDate: undefined
           });
           this.Causes.unshift({
               causesId: 0, name: "Seleccione un Causa",
               isActive: false,
               createBy: undefined,
               createUser: '',
               createDate: undefined,
               modifiedBy: 0,
               modifiedUser: '',
               modifiedDate: undefined
           });
           this.Location.unshift({
               locationId: 0, name: "Seleccione una Ubicación",
               isActive: false,
               createDate: undefined,
               createBy: 0,
               createUser: '',
               modifiedBy: 0,
               modifiedUser: '',
               modifiedDate: undefined
           });

          this.loading = false;
      }
      catch(ex){
          Messages.warning("Advertencia", ex);
          this.loading = false;
      }
  }

  showDialog(Ticket:TicketModel, isAdd:boolean) {
      this.new();
      this.isAdd = isAdd;
      this.Ticket = Ticket;
      this._createFormBuild();
      this.display = true;
      this._getDdls();

  }
  _createFormBuild(){
      this.formTicket = this.fb.group({
      
      //Validacion de Campos normales
      expirationDate: [this.Ticket.expirationDate??"", Validators.required],
      comment: [this.Ticket.comment??"", Validators.required],
      brandId: [this.Ticket.brandId??"", Validators.required],

      //Validacion de Listas desplegables
      lote: [this.Ticket.lote??"", Validators.required],

      deparmentId: [this.Ticket.deparmentId??0, Validators.compose([
          Validators.required, Validators.min(1)
      ])],
      causesId: [this.Ticket.causesId??0, Validators.compose([
          Validators.required, Validators.min(1)
      ])],
      locationId: [this.Ticket.locationId??0, Validators.compose([
          Validators.required, Validators.min(1)
      ])],

   })
  }

  new(){
      this.Ticket = undefined;
      this.formTicket = undefined;
  }


  async add(){
      if(this.formTicket.valid){
          try{
              Messages.loading("Agregando", "Agregando Ticket");
              let AddBrand = {
                  brandId: "string",
                  name: "string",
                  lote: "string",
                  createBy: 1,
                  createDate: new Date().toDateString(),
                }
                console.log(AddBrand)
                console.log(AddBrand)
              //let Brands = await this.BrandService.add(AddBrand)
              //let Tickets = await this.TicketService.add(this.formTicket.value);
              Messages.closeLoading();
              Messages.Toas("Agregando Correctamente");
              //this.TicketModify.emit(Tickets);
              this.display = false;
          }
          catch(ex){
              Messages.closeLoading();
              Messages.warning("Advertencia", ex);
          }
      }
  }
}
