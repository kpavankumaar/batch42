import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { P1c1Component } from './p1c1.component';

@NgModule({
    declarations:[P1c1Component],
    exports:[P1c1Component],
    imports:[CommonModule]
})
export class P1c1Module{

}