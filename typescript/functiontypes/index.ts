function mul(num1:number, num2:number): number{
    return num1 * num2;
}
mul(10, 20);
mul("", 10);

// function type 
let sampleFn:(a:number, b?:number, c?: string) => number ;
sampleFn = function(num1, num2){
    return num1 - num2;
}

sampleFn(10,2);


// rest parameters
function friendsList(f1: string, ...f2:string[]): Array<string>{
    console.log(f2);
    return [f1];

}
friendsList("ravi","srk", "j",4);

// this 

let obj = {
    name : "srk",
    age_1: 25,
    hieght_1: 6,
    info: () => {
        console.log(this.name + " " + this.age_1 + " " + this.hieght_1);
        console.log(this.age);
    }
}

