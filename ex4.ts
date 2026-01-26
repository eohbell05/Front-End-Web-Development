//C:\Users\EthanOHalloranBell-S\OneDrive - Atlantic TU\Year 2\Front end web development\Lab1>C:\Users\EthanOHalloranBell-S\Desktop\node-v24.13.0-win-x64\node.exe ex4.ts
function stringCount(value: string):number{
    return value.length;
    //value.trim().length
}

function stringCountTrim(val:string):number {
    return val.trim().length;
}

function CountBoth(value:string,spaces?:boolean):number {
    let count:number = 0;

    if(spaces){
        count = value.length;
    }
    else{
        count= value.trim().length;
    }
    return count;
}

console.log(stringCount(" test1 "));
console.log(stringCountTrim(" test1 "));
console.log(CountBoth(" test1 ", true));
console.log(CountBoth(" test1 ", false));
console.log(CountBoth(" test1 " ));