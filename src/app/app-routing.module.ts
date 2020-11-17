import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FormComponent } from './form/form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FullPageScrollComponent } from './full-page-scroll/full-page-scroll.component';

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
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "cart",
    component: CartPageComponent
  },
  {
    path: "full-page-scroll",
    component: FullPageScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
