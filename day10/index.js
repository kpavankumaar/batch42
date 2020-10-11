var bindData = document.getElementById('data');
function makeApicall (method,url){
    // return 20;
    return new Promise(function(resolve, reject){
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
                    resolve(data);
                    //console.log(data)
                    //fetchData(data);
                    //bindData.innerHTML = data[0].name;
                            

                }else if (true){
                    reject(xhr.status);
                    
                }
            }
            
        }
        xhr.onerror = function (e){
            console.log(e , xhr.status);
        }  
        xhr.onloadstart = function(){
            console.log(xhr.status);
        }
        xhr.ontimeout = function(){
            console.log(xhr.status, 'value');
        }
        xhr.onprogress = function(e){
            e.preventDefault();
            console.log(xhr.status, 'onprogress')
        }
        xhr.onloadend= function (event){
            console.log(uid, 'onloadend');
            console.log(xhr.status);
        }
        xhr.send();  
        
    })
    
    // return data;
}

// post, get, update, delete

console.log('written after ajax call ');
var dataFromUrl1 = makeApicall('get', 'https://jsonplaceholder.typicode.com/comments')
console.log(dataFromUrl1);
dataFromUrl1.then(function(data){
    console.log(data);
    return data;
}).then(function(data1){
    console.log(data1);
}).then(function(val){
    console.log(val);
});
// dataFromUrl1.catch(function(){

// })
var name = "krishna";
console.log(name);
function sample(){
    name = "radha";
}