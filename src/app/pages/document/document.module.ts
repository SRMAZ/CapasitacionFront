import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentPrimeNg } from 'src/app/components.primeng';
import { DocumentComponent } from './document.component';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component'; // MODULOS DE PRIMENG



@NgModule({
  declarations: [
    DocumentComponent,
    DocumentDialogComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ComponentPrimeNg,
    ReactiveFormsModule
   ]
})
export class DocumentModule { }
