import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { ResultComponent } from './result/result.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { PrixceComponent } from './prixce.component';

const prixceRoutes: Routes = [
  {
    path: 'prixce',
    component: PrixceComponent,
    children: [
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: 'edit',
        component: EditResultComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(prixceRoutes)],
  exports: [RouterModule]
})
export class PrixceRoutingModule { }
