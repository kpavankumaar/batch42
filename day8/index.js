var content = document.getElementsByClassName("content")[0];
var btn = document.getElementById("btn");
var bol = true;
btn.onclick = function(){
    if(bol){
        content.innerHTML = '<object type="text/html" data="about.html" ></object>';
        bol = false;
    }else{
        content.innerHTML = '<object type="text/html" data="index.html" ></object>';
        bol = true;
    }
}

function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
}
// ajax 
// var xhr = new XMLHttpRequest();
// xhr.open('GET','about.html');
// console.log(xhr.readyState);// 0 - 4 
// xhr.onreadystatechange = function(){
//     console.log(xhr.responseText);
// }
// xhr.send();
// xhr.onload = function(){

// }