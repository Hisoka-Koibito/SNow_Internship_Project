app.controller('UserDetailsController', ['$scope', '$routeParams', 'userList', '$window', function($scope, $routeParams, userList, $window) {
    const { page: userPage, id: userIndex } = $routeParams;
    $scope.currentPage = userPage;  // Store the current page in $scope.currentPage

    // Fetch user data and assign directly to $scope.details
    userList.fetchUsers(parseInt(userPage)).then(function(response) {
        $scope.details = response.data[userIndex];
    }).catch(function(error) {
        console.error("Error fetching user details:", error);
    });

    // Go back to previous page
    $scope.goBack = () => $window.history.back();
}]);
