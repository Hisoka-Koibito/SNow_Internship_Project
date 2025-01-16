app.controller('UserDetailsController', ['$scope', '$routeParams', 'userList', function($scope, $routeParams, userList) {
    const { page: userPage, id: userIndex } = $routeParams;  // Destructure to extract params
    $scope.currentPage = userPage;


    userList.fetchUsers(parseInt(userPage)).then(function(response) {
        $scope.details = response.data[userIndex];  // Use the index to get the correct user details
    }).catch(function(error) {
        console.error("Error fetching user details:", error);
    });

}]);
