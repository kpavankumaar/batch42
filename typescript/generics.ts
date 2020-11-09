function sum(num1: number, num2:number):number{
    return num1 + num2;
};

function add(a:number, b:number):any{
    return a + b;
}

function independentFn<T>(a:T, b:T):T{
    return a;
}
function testFn<T>(arg: T[]):T[]{
    arg.length
    return arg.length;
}
function testFn_1<T>(arg: Array<T>):Array<T>{
    return arg;
}
let name_1 = independentFn("content","generic");
let name_2 = independentFn(20,10);

// generic types 
let genericType1: <T>(arg:T[]) => T[] = testFn
// generic classes

class CalcAVal <T>{
    prop1: T 
    meth: (arg:T) => T
}

let ins = new CalcAVal<string>();
ins.prop1

