// indexable types 


interface ArrayString{
    [index1:number]:string;
}
let friends_2:ArrayString =["srk", "ravi"];

interface Relations{
    relationType: string;
}

interface Animals extends Relations{
    name: string;
}

interface Elephant{
    [index:number]: Animals;
}

let elephantBreeds:Elephant = [{name:"african", relationType: "parent"}];

interface Printers{
    [index:string]:number | string;
    length: number;
    name:string;
}

// class types
interface Phone{
    fn1: string;
    prev: boolean;
    newVal:string;
}
class Iphone implements Phone{

    fn1 = "calling";
    constructor(public prev, public newVal){
        this.prev = "true";
        this.newVal = "12";
    }
}

// union and intersection types 
interface Relations1{
    relationType: string;
}

interface Animals1 {
    name: string;
}

function Humanbegieng(): Animals1 | Relations1 {
    return {name:"srk"};
}

