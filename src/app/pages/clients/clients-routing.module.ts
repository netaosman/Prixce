import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ClientsComponent } from './clients.component';
import { SegmentComponent } from './segment/segment.component';

const clientsRoutes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
    children: [
      {
        path: 'segment',
        component: SegmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientsRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
