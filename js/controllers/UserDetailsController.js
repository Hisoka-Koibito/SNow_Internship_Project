app.controller('UserDetailsController', ['$scope', '$routeParams', 'userList', function($scope, $routeParams, userList) {
    userList.then(function(response){
        $scope.details = response.data[$routeParams.id];
    })
}])