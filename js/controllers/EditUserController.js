app.controller('EditUserController', ['$scope', '$routeParams', 'userList', '$location', function($scope, $routeParams, userList, $location) {
    const { page: userPage, id: userIndex } = $routeParams; // Destructure route parameters

    // Fetch users for the correct page
    userList.fetchUsers(parseInt(userPage)).then(function(response) {
        $scope.user = response.data[userIndex]; // Assign the specific user data
    }).catch(function(error) {
        console.error("Error fetching user details:", error);
    });

    // Update user and redirect to the user list page
    $scope.updateUser = function() {
        userList.updateUser($scope.user); // Update the user in the list
        $location.path('/'); // Redirect to the user list
    };

    // Delete user and redirect to the user list page
    $scope.deleteUser = function() {
        userList.deleteUser($scope.user.id); // Delete the user from the list
        $location.path('/'); // Redirect to the user list
    };
}]);
