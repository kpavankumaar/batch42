import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1c2',
  templateUrl: './p1c2.component.html',
  styleUrls: ['./p1c2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class P1c2Component implements OnInit {

  constructor(private cd:ChangeDetectorRef) { 
    // this.cd.detach();
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P1c2 Component change detection")
  }
}
