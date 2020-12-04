import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoredataService } from '../storedata.service';

@Injectable()
export class ServerDataService {

  constructor(private http : HttpClient) { 
    
  }
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts", {responseType: 'json'})
  }
  sample;
  
}
