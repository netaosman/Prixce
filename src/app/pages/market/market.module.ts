import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { IntroComponent } from './intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { PricesComponent } from './prices/prices.component';
import { StrategiesComponent } from './strategies/strategies.component';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule
  ],
  declarations: [MarketComponent, IntroComponent, HistoryComponent, PricesComponent, StrategiesComponent]
})
export class MarketModule { }
