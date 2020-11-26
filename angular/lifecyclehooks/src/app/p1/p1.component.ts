import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class P1Component implements OnInit {

  constructor(private cd: ChangeDetectorRef) { 
    // this.cd.detach();
  }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P1Component change detection")
  }

}
