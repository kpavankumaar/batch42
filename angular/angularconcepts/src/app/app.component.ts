import { Component } from '@angular/core';
import { StoredataService } from './storedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communication';
  constructor(private access: StoredataService){
    console.log(" constructor app component")
  }
  ngOnInit(){
    console.log(" ngOnInit app component");
    this.access.authenticated = true;
    console.log(this.access.authenticated);
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
