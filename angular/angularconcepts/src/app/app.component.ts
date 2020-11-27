import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communication';
  constructor(){
    console.log(" constructor app component")
  }
  ngOnInit(){
    console.log(" ngOnInit app component")
  }
  ngDoCheck(){
    console.log(" ngDoCheck app component")
  }
  
  updatedData(content){
    console.log(content);
  }
  dataFromChildComponent(item){
      console.log(item);
  }
}
