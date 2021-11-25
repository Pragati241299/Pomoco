import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  categories = [
    {
      img: '../../../assets/Image/Logo.png',
      name: 'Baked'
    },
    {
      img: '../../../assets/Image/Logo (4).png',
      name: 'Sweet'
    },
    {
      img: '../../../assets/Image/Logo (1).png',
      name: 'Hot Dish'
    },
    {
      img: '../../../assets/Image/Logo (2).png',
      name: 'Fast Food'
    },
    {
      img: '../../../assets/Image/Logo.png',
      name: 'Salads'
    },
  ]
  restaurantList = [
    {
      img: '../../../assets/Image/Image.png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'
    },
    {
      img: '../../../assets/Image/Image (1).png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'

    },
    {
      img: '../../../assets/Image/Image (2).png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'

    },
    {
      img: '../../../assets/Image/Image.png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'

    },
    {
      img: '../../../assets/Image/Image (1).png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'

    },
    {
      img: '../../../assets/Image/Image (1).png',
      name: 'Burger Mania',
      content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam. Numquam provident, animi dicta repellat ab et veniam temporibus dolore sint, suscipit nemo neque voluptas libero nulla totam aperiam tempora.'

    }
  
  ]
}
