import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { MarketComponent } from './market.component';
import { IntroComponent } from './intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { StrategiesComponent } from './strategies/strategies.component';

const marketRoutes: Routes = [
  {
    path: 'market',
    component: MarketComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'strategy',
        component: StrategiesComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(marketRoutes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
