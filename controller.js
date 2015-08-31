var app = angular.module('userProfiles');

app.controller('mainController', function($scope, mainService){
	$scope.message = "angular is working meng!";

 	$scope.users = mainService.getData();
});