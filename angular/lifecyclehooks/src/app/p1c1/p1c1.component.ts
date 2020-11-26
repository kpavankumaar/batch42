import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1c1',
  templateUrl: './p1c1.component.html',
  styleUrls: ['./p1c1.component.css']
})
export class P1c1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("P1c1 Component change detection")
  }
}
