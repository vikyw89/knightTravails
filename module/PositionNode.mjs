class PositionNode {
    constructor ({ row, col, prev, next }){
        this.col = col
        this.row = row
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

export { PositionNode }