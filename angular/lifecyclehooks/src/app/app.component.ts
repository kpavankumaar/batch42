import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj = {
    
    title:'lifecyclehooks'
  }
  ngOnChanges(){
   console.log('app component ngonchanges') 
  }
  ngOnInit(): void {
    console.log("app component ng on init ")
  }
  updateTitle(val){
    this.obj = val;
  }
}
