// creating a call signiture with a normal function
function superPrint <T>(a:T[]){
    return a[0]
}

const a = superPrint([1,2,true,"four"])

// examples
type Player<E> = {  // generic
    name: string,
    extraInfo: E
}

type CocoExtra = {
    favFood: string
}

type CocoPlayer = Player<CocoExtra>

const Coco: CocoPlayer = {
    name: "coco",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lili: Player<null> = {
    name: "lili",
    extraInfo: null
}

// 💡 most of basic TypeScript types can also be created as generics
type arrNumbers = Array<number>
let n:arrNumbers = [1,2,3,4]

function printAllNumbers(arr: Array<number>){
    
}