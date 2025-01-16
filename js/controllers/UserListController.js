app.controller("UserListController", ['$scope', 'userList', function($scope, userList) {
    $scope.currentPage = 1;  // Default to first page

    // Function to load users for the current page
    $scope.loadPage = function(page) {
        if (page < 1) return; // Prevent invalid page numbers

        // Call user service to fetch users for the current page
        userList.fetchUsers(page).then(function(response) {
            // Update the user list for the current page
            $scope.users = response.data;

            // Dynamically update current page and total pages based on API response
            $scope.currentPage = page;
            $scope.totalPages = response.total_pages;

        }).catch(function(error) {
            console.error("Error loading users:", error);
        });
    };

    // Initial page load (first page)
    $scope.loadPage($scope.currentPage);
}]);
