angular
	.module('app')
	.controller('hollowCtrl', ['$scope', function($scope) {
	 	$scope.title = "Hollow";
	 	$scope.ready();
	 }]);