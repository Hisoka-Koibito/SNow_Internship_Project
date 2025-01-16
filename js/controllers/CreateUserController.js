app.controller('CreateUserController', ['$scope', '$location', 'userList', function($scope, $location, userList) {
    // Initialize the new user object with default avatar
    $scope.newUser = {
        first_name: '',
        last_name: '',
        email: '',
        avatar: 'https://i.pravatar.cc/150?img=9'
    };

    // Function to create a new user
    $scope.createUser = function() {
        if ($scope.createUserForm.$valid) {
            userList.addUser($scope.newUser);

            $location.path('/');
        } else {
            console.log("Form is not valid. Please fill in all required fields.");
        }
    };
}]);
