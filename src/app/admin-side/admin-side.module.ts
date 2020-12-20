import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSideRoutingModule } from './admin-side-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminSideRoutingModule
  ]
})
export class AdminSideModule { }
