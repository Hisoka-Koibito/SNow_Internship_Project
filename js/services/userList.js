app.factory('userList', ['$http', function($http) {
    let users = []; // Local array to store users

    // Fetch users from API
    function getUsers(page) {
        return $http.get('https://reqres.in/api/users?page=' + page)
            .then(function(response) {
                users = response.data.data; // Store users from the API response
                return response.data;  // Return data (users and pagination info)
            })
            .catch(function(error) {
                console.log("Error fetching users:", error);
                return { data: [], total_pages: 1 }; // Return empty data on error
            });
    }

    // Add a new user to the array
    function addUser(user) {
        users.push(user);  // Adds user to the array
        console.log("New user added:", user);
    }

    // Update a user's data
    function updateUser(updatedUser) {
        console.log("Updating user:", updatedUser);  // Debugging: log user being updated
        console.log("Before update, users array:", users);  // Log array before update

        const userIndex = users.findIndex(user => user.id === updatedUser.id);
        if (userIndex !== -1) {
            users[userIndex] = updatedUser;  // Update the user in the array
            console.log("After update, users array:", users);  // Log array after update
        } else {
            console.error("User not found for update:", updatedUser);
        }
    }

    // Delete User and log to console to make sure everything is working
    function deleteUser(userId) {
        console.log("Deleting user with ID:", userId);
        console.log("Before deletion, users array:", users);

        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            console.log("After deletion, users array:", users);
        } else {
            console.error("User not found for deletion:", userId);
        }
    }

    // Return the functions to be used in controllers
    return {
        fetchUsers: getUsers,
        addUser: addUser,  // Ensure addUser function is available
        updateUser: updateUser,
        deleteUser: deleteUser
    };
}]);
