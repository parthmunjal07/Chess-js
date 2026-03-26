export

let currentTurn = "white"
let selectedPiece
let moveHistory 

let gameState = {
    board: [...chessBoard],
    currentTurn: "white",
    selectedSquare: null,
    isGameOver: false,
}

let chessBoard = [
    ["bRook","bKnight","bBishop","bQueen","bKing","bBishop","bKnight","bRook"],
    ["bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn"],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ["wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn"],
    ["wRook","wKnight","wBishop","wQueen","wKing","wBishop","wKnight","wRook"],
]

function getBoard() {
    return gameState.board
} 
function getCurrentTurn() {
    return gameState.currentTurn
}
function getPieceAt(row, col) {
    return gameState.board[row][col]
}
function setSelection(row, col) {
    gameState.selectedSquare = {row, col}
}
function clearSelection() {
    gameState.selectedSquare = null
}
function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = getPieceAt(fromRow, fromCol)
    gameState.board[toRow][toCol] = piece
    gameState.board[fromRow][fromCol] = null
    clearSelection()
    gameState.currentTurn = gameState.currentTurn === "white" ? "black" : "white"
}