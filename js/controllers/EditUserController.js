app.controller('EditUserController', ['$scope', '$routeParams', 'userList', '$location', function($scope, $routeParams, userList, $location) {
    const userPage = parseInt($routeParams.page);  // Get page number from route
    const userIndex = parseInt($routeParams.id);   // Get user index from route

    // Fetch users for correct page
    userList.fetchUsers(userPage).then(function(response) {
        const users = response.data;
        $scope.user = users[userIndex];
    }).catch(function(error) {
        console.error("Error fetching user details:", error);
    });

    // Update user and redirect to user list page
    $scope.updateUser = function() {
        userList.updateUser($scope.user);
        $location.path('/');
    };

    // Delete user and redirect to user list page
    $scope.deleteUser = function() {
        userList.deleteUser($scope.user.id);
        $location.path('/');
    };
}]);
