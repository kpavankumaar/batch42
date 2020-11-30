import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content:string;
  obj = {
    
    title:'lifecyclehooks'
  }
  ngOnChanges(){
   console.log('app component ngonchanges') 
  }
  ngDoCheck(){
    console.log("appcomponent ngdocheck");
  }
  ngOnInit(): void {
    setTimeout(() =>{
      this.content = "data"
    }, 10000);
    console.log("app component ng on init ")
  }
  updateTitle(val){
    this.obj = val;
  }
  
}
