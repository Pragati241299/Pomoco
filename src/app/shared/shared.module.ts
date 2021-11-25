import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RouterModule } from '@angular/router';
import { SearchFilterComponent } from './search-filter/search-filter.component';



@NgModule({
  declarations: [
    RestaurantCardComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RestaurantCardComponent
  ]
})
export class SharedModule { }
