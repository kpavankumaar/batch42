// let name_1 = "data";
// var data = "test";

// var name_1 = "content";
let age: number;
age = "";
let obj = "";
obj = 10;
// let arr: number[] ;
let arr: Array<number> ;
arr = [1,2,3,4,5,""];

let  arr1: [number , string];
arr1 = ["", 10];

arr1 = [10,"ravi"];
arr1 = [8,"srk"];
arr1[1] = "pavan";
arr1[2] = "test";
// unknown 
//void
//null and undefined
//never
// type assertions
// function types
// optional and default parameters
// rest parameters
// this parameters
// this parameters in callbacks
// unions and intersection types 
// class
// class types
// interfaces 

console.log(arr1);

enum Color{
    red = 1,
    green = 3,
    yellow
}

console.log(Color.green);

let choose:Color = Color.green;
console.log(choose);
let data : unknown = 4;
data = "content";
// unknown type 
declare const test: unknown;
const num:number = test;
// test = 5;
// Type 'unknown' is not assignable to type 'number'.
if(typeof test === 'string'){
    const str: string = test;
    const abol: boolean = test;//Type 'string' is not assignable to type 'boolean'.
}

// any type 
declare function getInfo(key:string):any
let optOut:any  = 10;
optOut.random();

let num_1:number = 25;
num_1.ifItExists();
num_1.toString()

let str: any = "access";

str.xyz();

// void type
function test_1():void {
    console.log('statement');
    // return null;
}
let test_2:void = undefined;
test_2 = null;
function test_3():null | undefined | string{
    return "string";
}

// never
function test_4(param:string):never {
    throw new Error(param);
    console.log("content");
}

// object - non primitive type number, string , boolean, null or undefined
declare function create(obj: object | null):void;
create({a:1})
create(10)
create(function(){});
// as syntax

let apiCall:unknown = 'data';
let apiCalllength: number = (apiCall as string).length;
let apiCalllength1: number = (<string>apiCall).length;

// interfaces 
interface SampleInt{
    a: number;
    label: string;
    value?: string;
}
interface ExtendedSampleInt extends SampleInt{
    
    logic:() => number
}
function test_5(sample:string):SampleInt {
  return {a:10, label: sample};
}


test_5("data");
let test_6 : SampleInt = {
    a: 15,
    label: "data",
}

let test_7:ExtendedSampleInt = {
    a: 15,
    label: "data",

}


interface Addition {
    readonly num1:number;
    readonly num2: number;
    num3?:number
}

let sum : Addition = {num1: 5, num2: 7};
let sum1: Addition = {num1: 6, num2: 10};
sum.num1 = 10;
sum1.num3 = 5;
interface Users{
    readonly admin:string;
    readonly users: string;
    readonly sme: string
}





interface Engine{

    startEngine:(start:string) => string
}
interface Transmission{
    clutch: string;
    gearSystem: string;
    wheels: string;
}
interface CarBody{
    bodyType: string;
    seating: string;
}
// interface SampleInt{
//     a: number, 
//     label: string,
//     value: "data"
// }
function createCar(config: Engine){

}