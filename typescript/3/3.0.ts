// 0. Call Signatures
function add1(a:number, b:number): number {
    return a + b
}

const add2 = (a:number, b:number) => a+b

type Add1 = (a:number, b:number) => number;
const add3:Add1 = (a, b) => a+b  // think types first before implementation

// 1. Overloading
// happens when a function has multiple call signitures
type Add2 = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}

const add4:Add2 = (a, b) => {
    // TypeScript makes you check types inside
    if (typeof b === "string") return a
    return a+b
}

// different number of parameter
type Add3 = {
    (a:number, b:number) :number,
    (a:number, b:number, c:number) :number,
}

const add5: Add3 = (a,b,c?:number) => {
    if (c) return a+b+c
    return a+b
}