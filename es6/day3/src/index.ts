import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
function makeApicall (method:string, url:string){
    // return 20;
    return new Observable((subscriber) => {
        var xhr = new XMLHttpRequest();
        //console.log(xhr.readyState);
        //console.log('before ajax call ');
        var data ;
        
        xhr.open(method, url, true);
        xhr.onreadystatechange = function (e){
            if(xhr.readyState === 4){
                if(xhr.status  === 200 ){
                    console.log("inside if statement");
                    data = JSON.parse(xhr.responseText);
                    //console.log(data)
                    subscriber.next(data);
                    subscriber.next('abc');
                    subscriber.complete();
                    //bindData.innerHTML = data[0].name;
                            

                }
            }
            
        }
        xhr.send();
        });
    
    
}
let test = makeApicall('get', "https://jsonplaceholder.typicode.com/comments");
test.subscribe((data) => {console.log(data)}, (err) => {console.log(err)}, () => {console.log('complete')})


ajax("get","https://jsonplaceholder.typicode.com/posts").subscribe(
    data => console.log(data.response),
    err => console.log(err)
)