import { PositionNode } from "./PositionNode.mjs"

class Knight {
    constructor ({ color, row, col }){
        this.color = color
        this.position = new PositionNode({row:row, col:col})
    }

    moveSet = [
        {row:1,col:2},{row:1,col:-2},
        {row:-1,col:2},{row:-1,col:-2},
        {row:2,col:1},{row:2,col:-1},
        {row:-2,col:1},{row:-2,col:-1}
    ]

    availableMove = (root) => {
        return this.moveSet.reduce((output, item)=>{
            const newRow = root.row + item.row
            const newCol = root.col + item.col
            if (newRow >= 8 || newRow < 0 || newCol >= 8 || newCol < 0) return output
            return output.concat(new PositionNode({ row:newRow, col:newCol, prev:root }))
        },[])
    }

    buildPositionTree = ({ row, col }) => {
        if (this.position.row === row && this.position.col === col) return this.position
        let queue = []
        let pointer  = this.position
        while (true) {
            const availableMove = this.availableMove(pointer)
            pointer.next = []
            for (let i = 0; i < availableMove.length; i++){
                pointer.next.push(availableMove[i])
                queue.push(availableMove[i])
                if (row === availableMove[i].row && col === availableMove[i].col) return availableMove[i]
            }
            pointer = queue.shift()
        }
    }

    knightMoves = ({ row, col }) => {
        const desiredNode = this.buildPositionTree({ row, col })
        let pointer = desiredNode
        let path = []
        while (pointer !== null) {
            path.unshift({row:pointer.row, col:pointer.col})
            pointer = pointer.prev
        }
        const printedPath = `You made it in ${path.length - 1} moves ! \nHere's your path [row,col]: \n${path.map(item=>{
            return `[${item.row},${item.col}]\n`
        }).join('')}`
        return printedPath
    }
}

export { Knight }