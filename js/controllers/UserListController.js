app.controller("UserListController", ['$scope', 'userList', function($scope, userList){
    userList.then(function(response){
        console.log(response.data);
        $scope.users = response.data;
    })
        .catch(function(error) {
            console.error("Error fetching user list:", error);
        })
}])