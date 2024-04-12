import { Component, OnInit, ViewChild } from '@angular/core';
import { Messages } from 'src/app/helpers/messages';
import { TypeDocumentModel } from '../orders/models/TypeDocument-models';
import { DocumentService } from '../orders/services/document.service';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';



@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
//  hace una instancia del componente
@ViewChild(DocumentDialogComponent) DocumentDialog:DocumentDialogComponent;

  //Definicion de variables
  title:string = 'Listado de Tipo de Documento';
  loading:boolean;
  documentList:TypeDocumentModel[] = [];
  documentData = {};

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.getTypeDocument();
  }

  // hace un listado de los documentos
  async getTypeDocument(){
    try {
      this.loading = true;
      Messages.loading('Espere un momento','Cargando datos....');
      this.documentList = await this.documentService.getTypeDocument();
      console.log(this.documentList)
      Messages.closeLoading();
      this.loading = false;
    } catch (error) {
      Messages.warning('Advertencia','A ocurrido un error');
    }
  }
 
  // Despliego el dialog
  AddDocument(){
    this.DocumentDialog.showDialog(true,null)
  }

  //Despliega un modal en el cual se edita
  EditDocument(typeDocument:TypeDocumentModel){
    this.DocumentDialog.showDialog(false,typeDocument);
  }
  
  //Recarga el listado con los nuevos valores
  DocumentModifylist(DocumentList:TypeDocumentModel[]){
    this.documentList = DocumentList;
  }

  //Despliega un dialog para confirmar el eliminar
  async dialogDelete(Id:number){
    let deleteRequest = await Messages.question('Advertecia','Esta seguro que quiere eliminar este tipo de documento');
    if(deleteRequest){
      this.delete(Id);
    }

  }
  
  //Elimina el documento
  async delete(Id:number){
    try {
      Messages.loading('Espere un momento', 'Eliminando documento...');
      let request = await this.documentService.deleteTypeDocument(Id);
      this.documentList = request;
      Messages.closeLoading();
    } catch (error) {
      Messages.warning('Advertencia','A ocurrido un error');
    }
  }

}
