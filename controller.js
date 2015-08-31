var app = angular.module('userProfiles');

app.controller('mainController', function($scope, mainService){
	$scope.message = "angular is working meng!";

	$scope.getUsers = function() {
        $scope.users = mainService.getData();
    };

    $scope.getUsers();
    console.log($scope.users);
});