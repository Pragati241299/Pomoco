import { Component, Input, OnInit } from '@angular/core';
import { RouteConstant } from '../../core/routes';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  routes= RouteConstant

  ngOnInit(): void {
  }

}
