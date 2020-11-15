import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-child1',
  templateUrl: './sample-child1.component.html',
  styleUrls: ['./sample-child1.component.css']
})
export class SampleChild1Component implements OnInit {

  constructor() { 
    console.log("constructor SampleChild1Component");
  }

  ngOnInit(): void {
  }

}
