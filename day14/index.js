let nameXyz = "srk";
var name1 = "ravi";
console.log(name);
console.log(this.name1);
console.log(this.nameXyz);
function desk(){

}
// function call(index){
//     setTimeout(function(req){
//         console.log(index);
//     },2000)
// }
for (let index = 0; index < 10; index++) {
    // call(index)    
    setTimeout(function(req){
        console.log(index);
    },2000)
};
// console.log(index);

// let declaration
var test;