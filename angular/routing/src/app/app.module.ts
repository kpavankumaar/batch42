import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobileComponent } from './product/mobile/mobile.component';


// let data;
// let test = new RouterModule("",data);
// let routes:Routes = [
//   {path:"home", component: HomeComponent},
//   {path:"about", component: AboutComponent},
//   {path:"services", component:ServicesComponent},
//   {path:"product", component: ProductComponent, 
//     children:[
//       {path:"mobile", component:MobileComponent}]
//     },
  
//   {path:"**", component: PagenotfoundComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
