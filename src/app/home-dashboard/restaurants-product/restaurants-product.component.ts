import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-product',
  templateUrl: './restaurants-product.component.html',
  styleUrls: ['./restaurants-product.component.scss']
})
export class RestaurantsProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuData= [
    {
      name: 'Chilli Potato',
      price: '£19.80',
      url: '../../assets/Image/pro-img.png'
    },
    {
      name: 'Chilli Potato',
      price: '£19.80',
      url: '../../assets/Image/pro-img.png'
    },
    {
      name: 'Chilli Potato',
      price: '£19.80',
      url: '../../assets/Image/pro-img.png'
    }
   
  ]

}
