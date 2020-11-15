import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1-child1',
  templateUrl: './sample1-child1.component.html',
  styleUrls: ['./sample1-child1.component.css']
})
export class Sample1Child1Component implements OnInit {

  constructor() {
    console.log("constructor Sample1Child1Component");
   }

  ngOnInit(): void {
  }

}
