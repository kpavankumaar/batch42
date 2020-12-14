import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerEditComponent } from './customer-edit.component';


@NgModule({
  declarations: [CustomerDetailComponent, CustomerOrdersComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
