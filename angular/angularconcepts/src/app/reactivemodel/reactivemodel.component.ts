import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivemodel',
  templateUrl: './reactivemodel.component.html',
  styleUrls: ['./reactivemodel.component.css']
})
export class ReactivemodelComponent implements OnInit {
  public formModel:FormGroup
  constructor( ) { }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl()

      }),
      crossFieldValidation: new FormGroup({
        fieldValidate:new FormControl("email", Validators.required),
        
      }),
      email: new FormControl("", Validators.pattern("pavan@gmail.com")),
      phone: new FormControl()
    })
  }
  sendData(){
    console.log(this.formModel);
  }
}
