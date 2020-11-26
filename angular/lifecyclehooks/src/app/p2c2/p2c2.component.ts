import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2c2',
  templateUrl: './p2c2.component.html',
  styleUrls: ['./p2c2.component.css']
})
export class P2c2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P2c2 Component change detection")
  }
  changeDetectionTest(){}
}
