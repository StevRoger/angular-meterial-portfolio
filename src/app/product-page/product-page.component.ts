import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  lstSliders: any [] = [
    { id: "001", img: "assets/bg-img/bg-04.jpg", title: "Slide 1", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
    { id: "002", img: "assets/bg-img/bg-04.jpg", title: "Slide 2", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
  ]

  lstFoods: any [] = [
    {id: "", img: "assets/product/food.jpg", title: "Product Name", price: "", short_desc: "" },
    {id: "", img: "assets/product/food.jpg", title: "Product Name", price: "", short_desc: "" },
    {id: "", img: "assets/product/food.jpg", title: "Product Name", price: "", short_desc: "" },
    {id: "", img: "assets/product/food.jpg", title: "Product Name", price: "", short_desc: "" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
