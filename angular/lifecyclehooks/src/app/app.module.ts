import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustDetailComponent } from './customers/cust-detail/cust-detail.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';

import { P1c2Component } from './p1c2/p1c2.component';
import { P2c1Component } from './p2c1/p2c1.component';
import { P2c2Component } from './p2c2/p2c2.component';
import { P1c1Module } from './p1c1/p1c1.module';
import { P1Module } from './p1/p1.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    CustDetailComponent,
    P2Component,
    P2c1Component,
    P2c2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // P1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
