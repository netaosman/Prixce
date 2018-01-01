import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { ValueComponent } from './value.component';
import { MarketShareComponent } from './market-share/market-share.component';
import { ProductComponent } from './product/product.component';
import { TweetsComponent } from './tweets/tweets.component';

const valueRoutes: Routes = [
  {
    path: 'value',
    component: ValueComponent,
    children: [
      {
        path: 'market-share',
        component: MarketShareComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'tweets',
        component: TweetsComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(valueRoutes)],
  exports: [RouterModule]
})
export class ValueRoutingModule { }
