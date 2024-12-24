var app = angular.module('UserManagement', ['ngRoute']);
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'UserListController',
            templateUrl: './views/users.html'
        })
        .when('/user/:id', {
            controller: 'UserDetailsController',
            templateUrl: './views/userdetails.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
