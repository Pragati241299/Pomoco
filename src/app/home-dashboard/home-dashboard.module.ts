import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { SharedModule } from '../shared/shared.module';
import { RestaurantsProductComponent } from './restaurants-product/restaurants-product.component';


@NgModule({
  declarations: [
    RestaurantsListComponent,
    RestaurantsDetailsComponent,
    RestaurantsProductComponent
  ],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
    SharedModule,
  ]
})
export class HomeDashboardModule { }
