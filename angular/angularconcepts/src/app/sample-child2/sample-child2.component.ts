import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-child2',
  templateUrl: './sample-child2.component.html',
  styleUrls: ['./sample-child2.component.css']
})
export class SampleChild2Component implements OnInit {

  constructor() { 
    console.log("constructor SampleChild2Component");
  }

  ngOnInit(): void {
  }

}
