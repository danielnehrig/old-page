angular
	.module('app')
	.controller('artworkCtrl', function($rootScope, $scope) {
	 	$scope.title = "Artwork Gallery";
	 	$scope.artwork = "active";
	 	$rootScope.class = "center";
	 	$scope.swipe1 = [
		    { num: '1', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '2', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '3', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '4', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '5', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '6', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'}
		  ];
		$scope.swipe2 = [
		    { num: '1', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '2', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '3', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '4', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '5', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '6', alt: 'Galaxy IP', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'}
		];
	 	$scope.ready();
	 });