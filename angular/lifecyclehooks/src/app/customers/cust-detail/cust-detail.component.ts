import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styleUrls: ['./cust-detail.component.css']
})
export class CustDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("CustDetailComponent ngdocheck");
  }


}
