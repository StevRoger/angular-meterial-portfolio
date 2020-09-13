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

  subTotal: number = 0;
  discount: number = 0;
  delivery: number = 15;
  grandTotal: number = 0;

  constructor() { }

  ngOnInit() {
    this.onCalculatePrice();
  }

  onCalculatePrice() {
    this.subTotal = 0;
    this.grandTotal = 0;
    this.delivery = 15;

    this.lstOrderedItem.forEach(item => {
      this.subTotal += item.price * item.qty;
    });
    this.grandTotal += this.delivery + this.subTotal;
  }

  onActions(result: string, index: any) {
    if (result == "increase") {
      this.lstOrderedItem[index].qty += 1;
    }
    if (result == "decrease") {
      this.lstOrderedItem[index].qty -= 1;
    }
    if (result == "remove") {
      this.lstOrderedItem.splice(index, 1);
    }
    this.onCalculatePrice();
  }

}
