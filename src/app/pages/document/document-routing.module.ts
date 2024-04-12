import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document.component';
const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'Document-list',
              component: DocumentComponent,
          },
          { path: '**', redirectTo: '' },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
