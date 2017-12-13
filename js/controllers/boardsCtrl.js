app.controller('boardsCtrl', function (boardFactory, $rootScope, $location) {
    this.boards = boardFactory.getBoards();

    this.removeBoard = function (board) {
        boardFactory.removeBoard(board);
    }

    this.addBoard = function () {
        boardFactory.addBoard(this.boardName);
        this.boardName = '';
    }

    this.chooseBoard = function (board) {
    	$rootScope.currentBoardId = board.id;
    	$location.path("board");
    }
})