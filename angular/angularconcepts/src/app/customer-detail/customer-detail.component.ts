import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnChanges,OnInit {
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

  ngOnChanges(obj){
    console.log(obj);
    this.type1 = this.dataFromParentEl;
  } 
  constructor(){
    console.log(" constructor CustomerDetailComponent")
  }
  
  ngOnInit(): void {
    this.type1 = "red";
    console.log(" ngOnInit on CustomerDetailComponent", this.type1);

  }
  ngDoCheck(){
    console.log(" CustomerDetailComponent  ngDoCheck")
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
