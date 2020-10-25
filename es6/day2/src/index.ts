// import { Observable } from "rxjs/observable";
import { Observable, fromEvent}  from "rxjs";
import { map } from "rxjs/operators";
// import {  } from "rxjs"

let listItem = document.getElementById('list');
const listener = (data:any) => {
    console.log(data);
}

const clicks = fromEvent(listItem, 'click');

clicks.subscribe((e)=>{ console.log(e.target)}, err => {console.error(err), ()=> {console.log('completed')}})
