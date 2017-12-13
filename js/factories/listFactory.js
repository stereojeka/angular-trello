app.factory('listFactory', function () {
    var service =  {};

    var lists = [
        {
            id: 1,
            listName: 'Todo',
            board_id: 1
        },
        {
            id: 2,
            listName: 'Doing',
            board_id: 1
        },
        {
            id: 3,
            listName: 'Done',
            board_id: 1
        },
        {
            id: 4,
            listName: 'Todo',
            board_id: 2
        },
        {
            id: 5,
            listName: 'Doing',
            board_id: 2
        },
        {
            id: 6,
            listName: 'Done',
            board_id: 2
        }
    ];

    service.getLists = function (board_id) {
        return _.filter(lists, { board_id: board_id });
    };

    service.addList = function (board_id, listName) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName,
            board_id: board_id
        });
    };
    
    service.removeList = function (list) {
        _.pull(lists, list);
    }

    return service;
})