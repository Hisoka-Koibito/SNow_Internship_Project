var app = angular.module('UserManagement', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'UserListController',
            templateUrl: './views/users.html'
        })
        .when('/user/:page/:id', {
            controller: 'UserDetailsController',
            templateUrl: './views/userdetails.html'
        })
        .when('/edit-user/:page/:id', {
            controller: 'EditUserController',
            templateUrl: './views/editUser.html'
        })
        .when('/create-user', {
            controller: 'CreateUserController',
            templateUrl: './views/createUser.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
