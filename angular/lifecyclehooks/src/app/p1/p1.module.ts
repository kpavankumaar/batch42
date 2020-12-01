import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { P1c1Module } from '../p1c1/p1c1.module';
// import { P1c2Component } from '../p1c2/p1c2.component';
import { P1C2Module } from '../p1c2/p1c2.module';
import { P1Component } from './p1.component';
import { RoutingModule } from './routing.module';

@NgModule({
    declarations:[P1Component],
    exports:[P1Component],
    imports:[CommonModule, RoutingModule,P1c1Module, P1C2Module]
})
export class P1Module{

}
