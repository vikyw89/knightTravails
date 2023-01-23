import { Knight } from "./module/Knight.mjs"
import { GameBoard } from "./module/GameBoard.mjs"
import { prettyPrint } from "./module/PrettyPrint.mjs"
import { PositionNode } from "./module/PositionNode.mjs"
console.log('starting App')

const knight = new Knight({ color:'white', row:4, col:4 })
knight.knightMoves(new PositionNode({ col: 3, row:5 }))

// console.log(GameBoard.model)