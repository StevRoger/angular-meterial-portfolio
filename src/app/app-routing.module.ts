import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FormComponent } from './form/form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "product",
    component: ProductPageComponent
  },
  {
    path: "services",
    component: ServicePageComponent
  },
  {
    path: "cart",
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
