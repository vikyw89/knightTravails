import { Knight } from "./module/Knight.mjs"
import { PositionNode } from "./module/PositionNode.mjs"
console.log('/////////////////')

const knight = new Knight({ color:'white', row:4, col:4 })
const path = knight.knightMoves(new PositionNode({ row:0, col:0 }))
console.log(path)