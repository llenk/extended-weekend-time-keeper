console.log('JS loaded');

var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'ngSanitize', 'mdDataTable']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            template: '<h2>Home</h2>'
        }).when('/entries', {
            templateUrl: 'views/entries.html', 
            controller: 'EntryController as vm'
        }).when('/projects', {
            templateUrl: 'views/projects.html', 
            controller: 'ProjectController as vm'
        }).otherwise( { template: '<h1>404</h1>' });
}]);
