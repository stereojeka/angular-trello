app.factory('boardFactory', function () {
    var service =  {};

    var boards = [
        {
            id: 1,
            boardName: 'Project Board 1'
        },
        {
            id: 2,
            boardName: 'Project Board 2'
        },
        {
            id: 3,
            boardName: 'Project Board 3'
        }
    ];

    service.getBoards = function () {
        return boards;
    };

    service.addBoard = function (boardName) {
        boards.push({
            id: _.uniqueId('board_'),
            boardName: boardName
        });
    };
    
    service.removeBoard = function (board) {
        _.pull(boards, board);
    }

    return service;
})