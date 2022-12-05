// Type Checker
let n : unknown;
let m = n + 1   // error! unknown type

if (typeof n === "number"){
    let m = n + 1   // okay
}
if (typeof n === "string"){
    let m = n.toUpperCase();    // okay
}

// void - function without return
function hello1() {
    console.log("x")
}

// never - function never returns
function hello2():never {
    return "x"  // error!
}
function hello3():never {
    throw new Error("xxx")  // okay - no return
}

function hello4(name:string|number){
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name    // never
        // this code should never run
    }
}