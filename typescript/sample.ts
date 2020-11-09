// interfaces part2
let friends: string[] = ["srk","ramesh","ravi"];
let friendsList: ReadonlyArray<string> = friends;
friendsList.push("rakesh");
friendsList.length = 4;

friends.push("rakesh");
friends.length = 5;
interface Addition1 {
    num1: number;
    num2:number;
    num3?:number;
    [key:string]: any
}

function add( additem:Addition1): {sum : number}{
    return {sum : (additem.num1 + additem.num2 + additem.num3)};
}
add({num1:10, num2:20, num3:15, num4:20, data:"test"});

interface Search{
    (): boolean
}

