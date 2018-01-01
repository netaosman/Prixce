import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const costsRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(costsRoutes)],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
