app.factory('userList', ['$http', function($http) {
    return $http.get('https://reqres.in/api/users')
        .then(function(response){
            return response.data
        })
        .catch(function(error) {
            console.log("Error fetching list:", error);
            return [];
        })
}])