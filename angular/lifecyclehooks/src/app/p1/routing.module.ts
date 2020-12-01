import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { P1c1Module } from '../p1c1/p1c1.module';
import { P1Component } from './p1.component';

const routes:Routes = [
    {path: "" ,component: P1Component}
]
@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class RoutingModule{

}