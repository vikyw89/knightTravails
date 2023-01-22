import { PossibleMove } from "./PossibleMove.mjs"

class Knight {
    constructor ({ color, row, col }){
        this.color = color
        this.position = new PossibleMove({row:row, col:col, next:null})
        this.positionTree = 
    }
    positionTree

    moveSet = [
        {row:1,col:2},{row:1,col:-2},
        {row:-1,col:2},{row:-1,col:-2},
        {row:2,col:1},{row:2,col:-1},
        {row:-2,col:1},{row:-2,col:-1}
    ]

    availableMove = (position) => {
        return this.moveSet.reduce((output, item)=>{
            const newRow = position.row + item.row
            const newCol = position.col + item.col
            if (newRow >= 8 || newRow < 0 || newCol >= 8 || newCol < 0) return output
            return output.concat({row:newRow, col:newCol, next:null})
        },[])
    }

    buildPositionTree = (position, depth) => {
        // base case
        if (depth === 0) {
            return
        }
        depth--
        // recursive case
        position.next = []
        const availableMove = this.availableMove(position)
        for (let i = 0; i < availableMove.length; i++) {
            position.next.push(this.buildPositionTree(availableMove[i], depth))
        }
        this.positionTree = position
    }

    positionTreeBFS = () => {
        let queue = []
        let output = []
        output.push(this.position)
        this.position.next.forEach(item=>{
            queue.push(item)
        })
        while (queue.length !== 0) {
            const newOutput = queue.shift()
            output.push(newOutput)
            newOutput.next.forEach(item=>{
                queue.push(item)
            })
        }
        return output        
    }

    knightMoves = (position) => {
        const { row, col } = position
        // return shortest available move to input position

        // traverse bfs to position
    }
}

export { Knight }