import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModifyEl]'
})
export class ModifyElDirective {

  constructor(private el: ElementRef) { 
    console.log("constructor ModifyElDirective");
    el.nativeElement.style.backgroundColor = "lightgrey";
  }
  @HostListener('click') clicked(){
    this.el.nativeElement.style.fontWeight = 'normal';
  }
  
}
