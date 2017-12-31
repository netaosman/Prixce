import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueRoutingModule } from './value-routing.module';
import { ValueComponent } from './value.component';
import { ProductComponent } from './product/product.component';
import { MarketShareComponent } from './market-share/market-share.component';
import { TweetsComponent } from './tweets/tweets.component';

@NgModule({
  imports: [
    CommonModule,
    ValueRoutingModule
  ],
  declarations: [ValueComponent, ProductComponent, MarketShareComponent, TweetsComponent]
})
export class ValueModule { }
