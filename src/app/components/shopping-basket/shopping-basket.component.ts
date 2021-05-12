import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item/shopping-item';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  items: ShoppingItem[] = [
    {name: "Books", price: 918,rating:5,image:`a.jpg`},
    {name: "Bag", price: 102,rating:4.5,image:`a.jpg`},
    {name: "Headset", price:151,rating:3,image:`e.jpg`},
    {name: "Mouse", price: 129,rating:5,image:`a.jpg`},
    {name: "Laptop", price: 426700,rating:3.2,image:`g.jpg`}
  ];
  constructor() { }

  ngOnInit(): void {
  }
total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  
  removeItem(item: ShoppingItem) {
    this.items = this.items.filter((i) => i !== item);
  }
}
