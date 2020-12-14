import { Component, OnInit } from '@angular/core';
import { Config } from '../services/interfaces';
// import { Config } from 'protractor';
import { ServerDataService } from '../services/serverdata.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  apiData;
  constructor(private serviceContent: ServerDataService){
    console.log(" constructor SampleComponent")
  }

  ngOnInit(): void {
    console.log(this.serviceContent.sample);
    this.serviceContent.getData().subscribe((data:Config[]) => {
      console.log(data);
      this.apiData = data;
    },(err) => { console.log(err)})
  }
  transferData(userData){
    const userDetails = {
      username : userData.controls.username.value,
      password : userData.controls.password.value
    }

    this.serviceContent.postData(userDetails).subscribe((data) => {
      console.log("successfully posted");
    }, (err) => {console.warn(err.message)})
  }
}
