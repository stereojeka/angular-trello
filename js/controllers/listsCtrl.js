app.controller('listsCtrl', function (listFactory, $rootScope) {

	if(typeof $rootScope.currentBoardId == "undefined")
		$rootScope.currentBoardId = 1;

	this.lists = listFactory.getLists($rootScope.currentBoardId);

	this.addList = function () {
		listFactory.addList($rootScope.currentBoardId, this.listName);
		this.lists = listFactory.getLists($rootScope.currentBoardId);
		this.listName = '';
	}

	this.removeList = function (list) {
		listFactory.removeList(list);
		this.lists = listFactory.getLists($rootScope.currentBoardId);
	}
})