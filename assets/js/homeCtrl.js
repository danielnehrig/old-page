angular
	.module('app')
	.controller('homeCtrl', function($rootScope, $scope, $timeout) {
	 	$scope.slogen = "Digital Artist & Creative Director";
	 	$scope.size = " ";
	 	$scope.home = "active";
	 	$scope.ready();
	 });