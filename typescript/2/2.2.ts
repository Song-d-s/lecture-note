// Types of TS
// 1. Implicit and Explicit Ways
// 2. Alias for Types
// 3. Types of Arguments and Return Types
// ======================================

// 1. Implicit and Explicit Ways
let a = [1, 2];
let b : string[] = ["li","1"]

// 2. Alias for types
type Age = number

type Player1 = {
    name: string,
    // Optional Type
    age?: Age,
}

const nico : Player1 = {
    name: "coco"
}

const lynn : Player1 = {
    name: "lili",
    age: 12,
}

// 3. Types of Arguments and Return Types
function playerMaker1(name:string) : Player1 {
    return {
        name: name,
    }
}

const playerMaker2 = (name:string) : Player1 => ({name})

const sam = playerMaker1("sam")
sam.age = 12