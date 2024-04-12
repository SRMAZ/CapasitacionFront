import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeDocumentModel } from '../models/TypeDocument-models';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient){}
  
  getTypeDocument(){
    return firstValueFrom(this.http.get<TypeDocumentModel[]>(`${environment.uriLogistic}/api/Documents`)); 
  }
  
  addTypeDocument(TypeDocument:TypeDocumentModel){
    return  firstValueFrom(this.http.post<TypeDocumentModel[]>(`${environment.uriLogistic}/api/Documents`, TypeDocument));
  }

  editTypeDocument(TypeDocument:TypeDocumentModel){
    return  firstValueFrom(this.http.put<TypeDocumentModel[]>(`${environment.uriLogistic}/api/Documents`, TypeDocument));
  }

   deleteTypeDocument(Id:number){
     return  firstValueFrom(this.http.delete<TypeDocumentModel[]>(`${environment.uriLogistic}/api/Documents/Delete/${Id}`));
   }
  
}
