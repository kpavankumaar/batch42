var url1 = "https://jsonplaceholder.typicode.com/comments";
var url2 = "https://jsonplaceholder.typicode.com/albums";
var url3 = "https://jsonplaceholder.typicode.com/photos";


function makeApicall (method,url, fetchData){
    // return 20;
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
                resolve(data);
                //bindData.innerHTML = data[0].name;
                          

            }
        }
        
    }
    xhr.send();
    return data;
}
// var firstCall = makeApicall('get', url1, function(data){
//     console.log("first",data)
//     var secondCall = makeApicall("get", url2, function(data){
//         console.log("second",data)
//         var thirdCall  = makeApicall("get",url3, function(data){console.log("third",data)});
//     });
// });
var firstCall = new Promise( function(resolve, reject){ makeApicall('get', url1);})
    

var secondCall = makeApicall("get", url2, function(data){
    console.log("second",data)
});
var thirdCall  = makeApicall("get",url3, function(data){console.log("third",data)});