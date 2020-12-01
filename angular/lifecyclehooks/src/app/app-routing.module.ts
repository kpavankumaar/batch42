import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';

const routes: Routes = [{ path:"parent", loadChildren: () => import("./p1/p1.module").then( mod => mod.P1Module)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
