var bindData = document.getElementById('data');
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
                fetchData(data);
                //bindData.innerHTML = data[0].name;
                          

            }
        }
        
    }
    xhr.send();
    return data;
}

// post, get, update, delete

console.log('written after ajax call ');
// var dataFromUrl1 = makeApicall('get', 'https://jsonplaceholder.typicode.com/comments')
// console.log(dataFromUrl1);