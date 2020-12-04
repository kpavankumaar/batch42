import { Component, OnInit } from '@angular/core';
import { StoredataService } from '../storedata.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private getdata: StoredataService){
    console.log(" constructor CustomersComponent")
  }

  ngOnInit():void{
    console.log(" ngOnInit CustomersComponent");
    console.log(this.getdata.authenticated)
  }
  ngDoCheck(){
    console.log(" ngDoCheck CustomersComponent");
  }
}
