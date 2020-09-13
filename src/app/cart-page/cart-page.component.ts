import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  lstOrderedItem: any[] = [
    { item: "Razer Blade Pro 15", qty: 1, price: 2499, img: "assets/product/food.jpg" },
    { item: "Nvidia Gforce RTX 3090", qty: 2, price: 1499, img: "assets/product/food.jpg" },
    { item: "Fantech K95 Pro", qty: 1, price: 150, img: "assets/product/food.jpg" },
    { item: "Samsung Odesey G9", qty: 1, price: 899, img: "assets/product/food.jpg" },
    { item: "Gaming Chair Valkeries", qty: 1, price: 299, img: "assets/product/food.jpg" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
