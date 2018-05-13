console.log('JS loaded');

var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial', 'md.data.table']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            template: '<h1>Home</h1>'
        }).when('/entries', {
            templateUrl: 'views/entries.html', 
            controller: 'EntryController as vm'
        }).when('/projects', {
            templateUrl: 'views/projects.html', 
            controller: 'ProjectController as vm'
        }).otherwise( { template: '<h1>404</h1>' });
}]);
