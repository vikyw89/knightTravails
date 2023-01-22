import { Knight } from "./module/Knight.mjs"
import { GameBoard } from "./module/GameBoard.mjs"
import { prettyPrint } from "./module/PrettyPrint.mjs"
console.log('starting App')

const knight = new Knight({ color:'white', row:4, col:4 })
const moveTree = knight.buildPositionTree(knight.position,3)
// console.log(moveTree.next)

// console.log(GameBoard.model)