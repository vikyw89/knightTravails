console.log('dir')

class GameBoard {
    // 2D array of the 8x8 chessboard
    static model = [...new Array(8)].map(item=>[...new Array(8).fill(null)])
}

class Knight {
    // available moves, relative to knight position at [0,0]
    moveAbility = [
        [1,2],[1,-2],
        [-1,2],[-1,-2],
        [2,1],[2,-1],
        [-2,1],[-2,-1]
    ]
}

console.log(GameBoard.model)