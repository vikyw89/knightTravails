console.log('dir')

class GameBoard {
    // 2D array of the 8x8 chessboard
    static model = [...new Array(8)].map(item=>[...new Array(8).fill(null)])

    static move = ({ piece, move }) => {
        // remove piece from the board
        
        // place piece on the board
    }
}

class Knight {
    constructor ({ color }){
        this.color = color
    }
    // available moves, relative to knight position at [0,0]
    moveSets = [
        {row:1,col:2},{row:1,col:-2},
        {row:-1,col:2},{row:-1,col:-2},
        {row:2,col:1},{row:2,col:-1},
        {row:-2,col:1},{row:-2,col:-1}
    ]

    availableMoves = (gameBoard) => {
        // find knight location on the 2D board
        let position
        position
        for (let row = 0; row < 8; row++){
            for (let col = 0; col < 8; col++) {
                if (gameBoard[row][col] === this) {
                    position = {row:row,col:col} 
                    break
                }
            }
        }

        // filter available move on the board
        const filteredAvailableMoves = this.moveSets.map(move=>{
            const takenMove = {row:position.row+move.row, col:position.col+move.col}
            if (takenMove.row >= 0 && takenMove.row < 8 && takenMove.col >= 0 && takenMove.col < 8) return takenMove 
        })
        return filteredAvailableMoves
    }
}

const knight = new Knight({ color:'white'})
GameBoard.model[4][4] = knight

console.log(GameBoard.model)
const nextMove = knight.availableMoves(GameBoard.model)
console.log(nextMove)