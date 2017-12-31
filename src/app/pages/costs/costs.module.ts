import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostsComponent } from './costs.component';

@NgModule({
  imports: [
    CommonModule,
    CostsRoutingModule
  ],
  declarations: [CostsComponent]
})
export class CostsModule { }
