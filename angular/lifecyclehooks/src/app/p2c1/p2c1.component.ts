import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2c1',
  templateUrl: './p2c1.component.html',
  styleUrls: ['./p2c1.component.css']
})
export class P2c1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P2c1 Component change detection")
  }
}
