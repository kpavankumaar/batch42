import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drivenform',
  templateUrl: './template-drivenform.component.html',
  styleUrls: ['./template-drivenform.component.css']
})
export class TemplateDrivenformComponent implements OnInit {
  firstnameVal = "ravi";
  constructor() { }

  ngOnInit(): void {
  }
  sendData(data){
    console.log("data" , data);
  }
}
