app.controller('boardCtrl', function (boardFactory, listFactory) {
    this.removeBoard = function (board) {
        boardFactory.removeBoard(board);
    }
    
    this.getLists = function (board) {
        return listFactory.getLists(board);
    }
    
    this.createBoard = function (board) {
        boardFactory.createCard(board, this.boardDescription);
        this.boardDescription = '';
    }
})