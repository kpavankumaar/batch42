import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { StoredataService } from '../storedata.service';
import { Config } from "./interfaces";

@Injectable()
export class ServerDataService {
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http : HttpClient) { 
    
  }
  getData():Observable<Config[]>{
    return this.http.get<Config[]>(this.url, {responseType: 'json'});
  }
  postData(formData){
    const options = new HttpHeaders();
    options.set("Content-Type","text").set("sampleHeader","samplevalue")
    const body = JSON.stringify(formData);
    return this.http.post(this.url, body, {headers : options} );
  }
  sample;
  
}
