var app = angular.module('app', ["ngRoute"])
    .config(function($routeProvider) {
    	$routeProvider.when('/',
        {
            templateUrl:'./views/boards.html'
        });
        $routeProvider.when('/boards',
        {
            templateUrl:'./views/boards.html'
        });
        $routeProvider.when('/board',
        {
            templateUrl:'./views/board.html'
        });
        $routeProvider.otherwise({redirectTo: '/boards'});
});