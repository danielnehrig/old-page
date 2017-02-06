angular
	.module('app')
	.controller('logoCtrl', function($rootScope, $scope) {
	 	$scope.title = "Logo Gallery";
	 	$scope.artwork = "active";
	 	$rootScope.class = "center";
	 	$scope.swipe1 = [
		    { num: '1', alt: 'Sepa Logo', full: 'design/logo/sepa/sepa.jpg', thumb: 'design/logo/sepa/sepa_thumb.jpg'},
		    { num: '2', alt: 'FxR Logo', full: 'design/logo/fxr/proj/FxR_thumb.png', thumb: 'design/logo/fxr/proj/FxR_thumb.png'},
		    { num: '3', alt: 'Sepa2 Logo', full: 'design/logo/sepa/sweden.png', thumb: 'design/logo/sepa/sepa2_thumb.jpg'},
		    { num: '4', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '5', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '6', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'}
		  ];
		$scope.swipe2 = [
		    { num: '1', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '2', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '3', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '4', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '5', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'},
		    { num: '6', alt: 'Placeholder', full: 'design/artwork/galaxyip.jpg', thumb: 'design/artwork/galaxyip.jpg'}
		];
	 	$scope.ready();
	 });