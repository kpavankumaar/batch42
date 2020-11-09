// import { Observable } from "rxjs/observable";
import { Observable, fromEvent}  from "rxjs";
import { map, sample } from "rxjs/operators";
// import {  } from "rxjs"

let listItem = document.getElementById('list');
const listener = (data:any) => {
    console.log(data);
}

const clicks = fromEvent(listItem, 'click');

clicks.subscribe((e)=>{ console.log(e.target)}, err => {console.error(err), ()=> {console.log('completed')}})

let sampleObservable = new Observable((subsciber) => {
    subsciber.next(5);
    subsciber.next(10);
    // subsciber.complete();
    let num = 0;
    setTimeout(() => {
        num++
        subsciber.next(num);
    },3000 )
    // subsciber.next(1);
    // subsciber.error()
    // subsciber.complete();
});

sampleObservable.subscribe((data) => { console.log("subscriber1",data)}, (err)=> { console.log(err)}, () => {console.log('conpleted')})
sampleObservable.subscribe((data)  => { let content:any = data; console.log( "subscriber2",content * 2)}, (err)=> { console.log(err)}, () => {console.log('conpleted')})
let obj = {
    next : (data:any) => { console.log("subscriber3",data)},
    error: (err:any) => { console.log("subscriber3", err)},
    complete:() => { console.log('complete')}

}
sampleObservable.subscribe(obj);
