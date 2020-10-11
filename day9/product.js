var dataFromServer;
makeApicall('get', 'https://jsonplaceholder.typicode.com/photos',function(data){
    dataFromServer = data; 
    console.log(dataFromServer);
})
console.log(dataFromServer);
