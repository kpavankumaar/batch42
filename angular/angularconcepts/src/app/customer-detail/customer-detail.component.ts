import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  title = "customer detail";
  type1 = "password";
  @Input() dataFromParentEl;
  @Output() dataFromChild: EventEmitter<string> = new EventEmitter();
  userInfo = {
    firstname: "krishna" ,
    lastname: "balaram",
    email: "krishna@gmail.com",
    phone: 9876543210
   }  
  constructor(){
    console.log(" constructor CustomerDetailComponent")
  }
  
  ngOnInit(): void {
    

  }
  dataSubmit(){
    this.dataFromChild.emit("data ")
  }
  updateFirstName(val){
    console.log(val);
    this.userInfo.firstname ;
  } 
  dataset(val){
    console.log(val);
    this.userInfo.firstname ;
  }   
  dataset1(val){
    console.log(val);
    this.userInfo.firstname ;
  }   
  items = ["krishna", "Balaram"] 
}
