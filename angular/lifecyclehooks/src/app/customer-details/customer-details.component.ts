import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() { }
  ngOnChanges(){
    console.log("customer details component ng on changes ");
  }
  ngOnInit(): void {
    console.log("customer details component ngOnInit ");
  }

}
