// readonly
type Player2 = {
    readonly name: string,
    age?: number,
}
const playerMaker = (name:string) : Player2 => ({name})
const coco = playerMaker("coco")
coco.age = 12
coco.name = "kiki"  // error - immutable (readonly)

// Tuple
const player: [string, number, boolean] = ["coco", 1, true]

// any - not recommended
const z : any[] = [1, 2, 3, 4]
const x : any = true

z + x   // okay