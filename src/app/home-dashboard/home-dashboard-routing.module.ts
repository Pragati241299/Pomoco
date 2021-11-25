import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RouteConstant } from '../core/routes';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';

const routes: Routes = [

  {
    path: '',
    component: RestaurantsListComponent
  },
  {
    path: RouteConstant.resturantDetail,
    component: RestaurantsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
