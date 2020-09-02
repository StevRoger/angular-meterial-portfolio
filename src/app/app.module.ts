import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, HomePageDialog } from './home-page/home-page.component';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ProductPageComponent, ProductDetailPopup } from './product-page/product-page.component';
import { ProductCardComponent } from './_components/product-card/product-card.component';
import { ServicePageComponent } from './service-page/service-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentNavbarComponent,
    FormComponent,
    ProductComponent,
    HomePageDialog,
    ComponentFooterComponent,
    ProductPageComponent,
    ProductCardComponent,
    ProductDetailPopup,
    ServicePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomePageDialog, ProductDetailPopup],
})
export class AppModule { }
