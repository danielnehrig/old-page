angular
	.module('app')
	.controller('streamCtrl', function($rootScope, $scope, $timeout) {
	 	$scope.title = "Stream";
	 	$scope.stream = "active";
	 	$scope.ready();
	 });