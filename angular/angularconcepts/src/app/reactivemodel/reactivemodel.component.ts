import { Component, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


let  rangeValidate = (c:AbstractControl): {[key:string]: boolean} | boolean  => {
  if(c.value > 5 || c.value < 1) {
    return {range: true};
  }
  return false;
}

@Component({
  selector: 'app-reactivemodel',
  templateUrl: './reactivemodel.component.html',
  styleUrls: ['./reactivemodel.component.css']
})
export class ReactivemodelComponent implements OnInit,DoCheck {
  public formModel:FormGroup
  constructor( ) { }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl()

      }),
      crossFieldValidation: new FormGroup({
        fieldValidate:new FormControl("email"),
        
      }),
      range: new FormControl(5, rangeValidate),
      email: new FormControl("", Validators.pattern("pavan@gmail.com")),
      phone: new FormControl("", Validators.required)
    })
  }
  ngDoCheck(){
    console.log(" ngDoCheck ReactivemodelComponent");
    console.log(this.formModel.get("range"))
    
  }
  sendData(){
    console.log(this.formModel);
  }
  updateFieldValidation(data){
    console.log(data);
    let fieldValidate = this.formModel.get("crossFieldValidation.fieldValidate");
    let emailField = this.formModel.get("email");
    let phoneField = this.formModel.get("phone");
    if(fieldValidate.value === "email"){
      phoneField.clearValidators();
      emailField.setValidators([Validators.required]);
      emailField.updateValueAndValidity();
      phoneField.updateValueAndValidity();

    }else if(fieldValidate.value === "phone"){
      emailField.clearValidators();
      phoneField.setValidators([Validators.required]);
      emailField.updateValueAndValidity();
      phoneField.updateValueAndValidity();
    }
    this.formModel.updateValueAndValidity();
  }
}
