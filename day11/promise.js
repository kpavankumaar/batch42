var url1 = "https://jsonplaceholder.typicode.com/comments";
var url2 = "https://jsonplaceholder.typicode.com/albums";
var url3 = "https://jsonplaceholder.typicode.com/photos";


function makeApicall (method,url, resolve){
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
function makeApicall_1(method,url, resolve,reject){
    // return 20;
   // reject(new Error());

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
                setTimeout(resolve(data), 5000);
                //bindData.innerHTML = data[0].name;
                          

            }else{
                reject(xhr.status);
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
var firstCall = new Promise(function(resolve, reject){makeApicall('get', url1, resolve);});
var secondCall = new Promise(function(resolve, reject){ setTimeout(resolve(3),5000)});
var thirdCall  = new Promise(function(resolve, reject){ makeApicall_1("get", url3, resolve, reject)});

// firstCall.then(function(data){
//     console.log(data, 'data');
//     secondCall.then(function(second){
//         console.log(second, 'second');
//         thirdCall.then(function(third){
//             console.log(third, 'third');
//         })
//     })
// });

Promise.all([firstCall, secondCall, thirdCall]).then(function(text){
    console.log(text);
}).catch(function(err){
    
        console.log(err);
    
})
