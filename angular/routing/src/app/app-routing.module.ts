import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

let routes:Routes = [
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"services", component:  ServicesComponent},
  {path:"product", component: ProductComponent, 
    children:[
      {path:"mobile", component:  MobileComponent}]
    },
  
  {path:"**", component: PagenotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
