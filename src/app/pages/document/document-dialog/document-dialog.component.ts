import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeDocumentModel } from '../../orders/models/TypeDocument-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../../orders/services/document.service';
import { Messages } from 'src/app/helpers/messages';


@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss']
})
export class DocumentDialogComponent implements OnInit {
  @Output() DocumentModify = new EventEmitter<TypeDocumentModel[]>();

  //Definicion de variables
  typeDocument:TypeDocumentModel;
  typeDocumentList:TypeDocumentModel[] = [];
  display:boolean;
  isAdd:boolean;
  title:string;
  loading:boolean;
  document: TypeDocumentModel = new TypeDocumentModel();
  documentFom:FormGroup;

  
  constructor(private form:FormBuilder, private documentService: DocumentService) { }

  ngOnInit(): void {
    this._BuildForm();
  }

  // Crea el formulario
  _BuildForm(){
    this.documentFom = this.form.group({
      id: [this.document.id ?? ''],
      name: [this.document.name ?? '', Validators.required],
      createBy: [this.document.createBy ?? 1],
      createbyDate: [this.document.createbyDate ?? new Date().toISOString().substring(0,10)],
      updateBy: [this.document.updateBy ?? 1],
      updateDate: [this.document.updateDate ?? new Date().toISOString().substring(0,10)]
    })
  }

  // Activa el modal
  showDialog(isAdd: boolean, typeDocument:TypeDocumentModel) {
    this.isAdd = isAdd;
    this.document = typeDocument;
    this.display = true;
    this._BuildForm();
  }

  //Agrega el documento
  async add(){
    try {
      Messages.loading('Espere  un momento','Agregando el tipo de  documento');
      let result = await this.documentService.addTypeDocument(this.documentFom.value);
      this.display = false;
      //hace que setee los datos nuevos 
      this.DocumentModify.emit(result)
      Messages.closeLoading();
      
    } catch (error) {
      Messages.warning('Advertencia','A ocurrido un error, contactese con el administrador')
    }
  }

  //Edita el documento
  async edit(){
    try {

      Messages.loading('Espere un momento','Editando el tipo de  documento');
      console.log(this.documentFom.value);
      let result = await this.documentService.editTypeDocument(this.documentFom.value);
      this.DocumentModify.emit(result)

      this.display = false;
      Messages.closeLoading();
      
    } catch (error) {
      Messages.warning('Advertencia','A ocurrido un error, contactese con el administrador')
    }
  }

 

}
