import { PositionNode } from "./PositionNode.mjs"

class Knight {
    constructor ({ color, row, col }){
        this.color = color
        this.position = new PositionNode({row:row, col:col, next:null})
    }

    moveSet = [
        {row:1,col:2},{row:1,col:-2},
        {row:-1,col:2},{row:-1,col:-2},
        {row:2,col:1},{row:2,col:-1},
        {row:-2,col:1},{row:-2,col:-1}
    ]

    availableMove = (position) => {
        return this.moveSet.reduce((output, item)=>{
            // console.log(output)
            const newRow = position.row + item.row
            const newCol = position.col + item.col
            if (newRow >= 8 || newRow < 0 || newCol >= 8 || newCol < 0) return output
            return output.concat(new PositionNode({ row:newRow, col:newCol }))
        },[])
    }

    buildPositionTree = (desiredPosition) => {
        const desiredPositionString = JSON.stringify(desiredPosition)
        if (JSON.stringify(this.position) === desiredPositionString) return this.position
        let queue = []
        let bfs = []
        let pointer  = this.position
        while (true) {
            const availableMove = this.availableMove(pointer)
            pointer.next = []
            for (let i = 0; i < availableMove.length; i++){
                pointer.next.push(availableMove[i])
                queue.push(availableMove[i])
                if (desiredPositionString === JSON.stringify(availableMove[i])) return
            }
            pointer = queue.shift()
        }
    }

    depth = (PositionNode) => {
        return this.#depth(this.position, PositionNode, 0)
    }

    #depth = (rootNode, node, level) =>{
        // base case
        if (JSON.stringify(rootNode) === JSON.stringify(node)) {
            return level
        } else if (rootNode === null || rootNode.next === null) {
            return 0
        }
        level++
        let maxDepth = 0
        // recursive case
        for (let i = 0; i < rootNode.next.length; i++) {
            maxDepth = this.#depth(rootNode.next[i], node, level)
            if (maxDepth !== 0){
                console.log(maxDepth)
                return maxDepth
            }
        }
    }

    knightMoves = (PositionNode) => {
        // return shortest available move to input position
        this.buildPositionTree(PositionNode)
        console.log(this.position)
        console.log(this.depth(PositionNode))
        return this.depth(PositionNode)
        // traverse bfs to position
    }
}

export { Knight }