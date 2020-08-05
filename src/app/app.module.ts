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
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, HomePageDialog } from './home-page/home-page.component';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PricingPlanDialogComponent } from './_components/pricing-plan-dialog/pricing-plan-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentNavbarComponent,
    FormComponent,
    ProductComponent,
    PricingPlanDialogComponent,
    HomePageDialog,
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
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomePageDialog],
})
export class AppModule { }
