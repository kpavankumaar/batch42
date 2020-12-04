import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../services/serverdata.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private serviceContent: ServerDataService){
    console.log(" constructor SampleComponent")
  }

  ngOnInit(): void {
    console.log(this.serviceContent.sample);
    this.serviceContent.getData().subscribe((data) => {
      console.log(data);
    })
  }

}
