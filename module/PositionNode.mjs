class PositionNode {
    constructor ({row, col, next}){
        this.col = col
        this.row = row
        this.next = next ?? null
    }
}

export { PositionNode }