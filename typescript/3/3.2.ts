// 2. Polymorphism 
type SuperPrint = {
    // (arr: number[]):void

    // using generic type
    // <TypePlaceholder>(arr: TypePlaceholder[]): void
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
    // TypePlaceholder - any word is okay. make typescript infer its type
}

// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i=> console.log(i))
// }

// superPrint([true,false,true])
// superPrint(["a","b","c"])
// superPrint([1,2,true,"abc"])

const superPrint: SuperPrint = (arr) => arr[0]

const q = superPrint([1,2,3,4])
const w = superPrint([true,false,true])
const e = superPrint(["a","b","c"])
const r = superPrint([1,2,true,"abc"])

// multiple generic
type SuperPrint2 = <T, M>(a: T[], b: M) => T
const superPrint2: SuperPrint2 = (arr2) => arr2[0]

const t = superPrint2([1,2,3], "x") // generating call signiture on demand
