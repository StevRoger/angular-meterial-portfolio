import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

let activeProductId: string = "";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  lstSliders: any[] = [
    { id: "001", img: "assets/bg-img/bg-04.jpg", title: "Slide 1", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
    { id: "002", img: "assets/bg-img/bg-04.jpg", title: "Slide 2", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
  ]

  lstFoods: any[] = [
    { id: "001", img: "assets/product/food.jpg", title: "Razer Synosa Pro Bundle", price: 54.99, short_desc: "" },
    { id: "002", img: "assets/product/food.jpg", title: "Fantech K65", price: 36.99, short_desc: "" },
    { id: "003", img: "assets/product/food.jpg", title: "Kraken X Ultimate", price: 69.99, short_desc: "" },
    { id: "004", img: "assets/product/food.jpg", title: "Deathadder 2 Pro", price: 119.50, short_desc: "" },
  ]

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onViewProductDialog(event: any) {
    activeProductId = event;
    this.dialog.open(ProductDetailPopup, {});
  }

}


@Component({
  selector: "product-detail-popup",
  templateUrl: "./product-detail-popup.html",
  styleUrls: ['./product-page.component.scss']
})
export class ProductDetailPopup implements OnInit {

  lstFoods: any[] = [
    { id: "001", img: "assets/product/food.jpg", title: "Razer Synosa Pro Bundle", price: 54.99, short_desc: "" },
    { id: "002", img: "assets/product/food.jpg", title: "Fantech K65", price: 36.99, short_desc: "" },
    { id: "003", img: "assets/product/food.jpg", title: "Kraken X Ultimate", price: 69.99, short_desc: "" },
    { id: "004", img: "assets/product/food.jpg", title: "Deathadder 2 Pro", price: 119.50, short_desc: "" },
  ]

  lstSpec: any[] = [
    { spec: "Removable Razer™ HyperClear Cardioid Mic with USB Sound Card" },
    { spec: "Advanced mic control features" },
    { spec: "Ultra-soft FlowKnit memory foam ear cushions" },
    { spec: "Razer™ SpeedFlex Cable" },
    { spec: "THX Spatial Audio" },
    { spec: "Connectivity – 3.5mm jack + USB sound card" },
    { spec: "Weighs 262g" },
  ]

  activeProduct: any = {};
  message: string = "";

  constructor(
    public dialogRef: MatDialogRef<ProductDetailPopup>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    if (activeProductId) {
      this.lstFoods.forEach(item => {
        if (item.id == activeProductId) {
          this.activeProduct = item;
        }
      });
    }
  }

  onAddToCart(action: string) {
    this.message = "Added " + this.activeProduct.title + " to cart"
    this.closeDialog();
    this.snackBar.open(this.message, action, { 
      duration: 3500,
      verticalPosition: 'bottom', 
      horizontalPosition: 'start',
      panelClass: ['primary-bg'] });
  }



  closeDialog() {
    this.dialogRef.close();
  }

}
