import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//prixce routing
import { PrixceRoutingModule } from './prixce-routing.module';

import { ResultComponent } from './result/result.component';
import { EditResultComponent } from './edit-result/edit-result.component';
import { PrixceComponent } from './prixce.component';

@NgModule({
  imports: [
    CommonModule,
    PrixceRoutingModule
  ],
  declarations: [ResultComponent, EditResultComponent, PrixceComponent]
})
export class PrixceModule { }
