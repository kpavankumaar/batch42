var _this = this;
function mul(num1, num2) {
    return num1 * num2;
}
mul(10, 20);
mul("", 10);
// function type 
var sampleFn;
sampleFn = function (num1, num2) {
    return num1 - num2;
};
sampleFn(10, 2);
// rest parameters
function friendsList(f1) {
    var f2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        f2[_i - 1] = arguments[_i];
    }
    console.log(f2);
    return [f1];
}
friendsList("ravi", "srk", "j", 4);
// this 
var obj = {
    name: "srk",
    age_1: 25,
    hieght_1: 6,
    info:  () => {

        console.log(this.name + " " + this.age_1 + " " + this.hieght_1);
        console.log(this.age);
    }
};
obj.info();