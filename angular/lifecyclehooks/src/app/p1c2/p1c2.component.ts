import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1c2',
  templateUrl: './p1c2.component.html',
  styleUrls: ['./p1c2.component.css'],
  
})
export class P1c2Component implements OnInit {
  count = 0;
  constructor(private cd:ChangeDetectorRef) { 
    // this.cd.detach();
    // setInterval(() => {
    //   this.count = this.count + 1;
      
    // },2000)
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P1c2 Component change detection")
  }
}
