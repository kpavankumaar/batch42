// define a class 
// readonly properties
// acessors
// modifiers - private, protected , public 
// static properties 
// abstract classes 
// namespaces 
// Generics 

export namespace CompanyCreation {

interface Organization {
    hr: string;
    operations: string;
    maintenance: string;
    employee?: string;

}
interface ThirdPartyCompany{
    name: string;
    experience: number;
    customerService: string;
}
interface StructureForPvtLtd{
    Director: string[];
    Auditor: string[];
}
abstract class LawDefinitionForPvtLtd{
    abstract lawMaker:string[] = ["ravi"];
    abstract done(param:any):number;
    constructor(obj:StructureForPvtLtd){

    }
    test():string{
        return "ravi"
    }
}

export class PvtLtd extends LawDefinitionForPvtLtd implements Organization, ThirdPartyCompany {
    constructor(data:number, public name:string, readonly noOfDept: number = 8 ){  
        super({Director:["krishna"],Auditor: ["Balaram"]});
        console.log("test****************");
        this.name_1 = "test";
        PvtLtd.noOfEmployes = data;
        
    }
    done(prop){
        return 10;
    }
    lawMaker = "";
    readonly name_1:string;
    readonly name_2:string = "krishna";
    static director = "local Resident";
    static noOfEmployes: number; 
    protected banking: string;
    private finance="finance team ";
    hr = "hrdepartment";
    operations = "production department";
    maintenance = "maintenance deparment";
    //employee = "list of employees";
    // name:string;
    experience: 5;
    customerService: "frontdesk";
    
    public set value(v : string) {
        this.finance = v;
    }
    
    public get value() : string {
        // this.name_1 = "test";
        this.noOfDept = 10;
        return this.finance;
    }
    test():string{
        return "srikanth";
    }
    
}

PvtLtd.noOfEmployes;
let xyzPvtLtd = new PvtLtd(50, "nbits", 20);
xyzPvtLtd.done(xyzPvtLtd.lawMaker);

xyzPvtLtd.noOfDept;
xyzPvtLtd.test();
xyzPvtLtd.name_1 = 10;
xyzPvtLtd.finance ;
xyzPvtLtd.value = "financeDept";
xyzPvtLtd.banking
xyzPvtLtd.noOfEmployes;
let financeValxyzPvtLtd = xyzPvtLtd.value;

class AbcPvtLtd  extends PvtLtd{
    // finance 
    banking:"hdfcbank"
    data(){
        this.noOfDept;
    }
}

abstract class Soil{
    color:string;

}

class Steel extends Soil{
    manufacturingProcess;
}

}



export namespace Test{
    class PvtLtd {
        
    }
}