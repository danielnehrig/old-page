var app = angular.module('app', ['ui.router','angular-loading-bar','ngAnimate']);

app.run(['$rootScope', function($rootScope) {
var _getTopScope = function() {
  return $rootScope;
  //return angular.element(document).scope();
};
// HTML SnapShot Code for SEO
$rootScope.ready = function() {
  var $scope = _getTopScope();
  $scope.status = 'ready';
  if(!$scope.$$phase) $scope.$apply();
};
$rootScope.loading = function() {
  var $scope = _getTopScope();
  $scope.status = 'loading';
  if(!$scope.$$phase) $scope.$apply();
};
$rootScope.$on('$routeChangeStart', function() {
  _getTopScope().loading();
});
}]);

// Routing
app.config(['$urlRouterProvider','$locationProvider','$stateProvider','cfpLoadingBarProvider', function($urlRouterProvider,$locationProvider, $stateProvider, cfpLoadingBarProvider) {
		$urlRouterProvider.otherwise('/home');
		$locationProvider.hashPrefix('!');
		cfpLoadingBarProvider.latencyThreshold = 35;

	 	$stateProvider
	 	.state('/home', {
	 		url: '/home',
	 		templateUrl: 'inc/home.html',
	 		controller: 'homeCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - Digital Artist & Creative Director'
	 		}
	 	});
	 	 	$stateProvider
	 	.state('/hollow', {
	 		url: '/design/hollow',
	 		templateUrl: 'inc/hollow.html',
	 		controller: 'hollowCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - Hollow'
	 		}
	 	});
	 		$stateProvider
	 	.state('/artwork', {
	 		url: '/design/artwork',
	 		templateUrl: 'inc/artwork.html',
	 		controller: 'artworkCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - Artwork'
	 		}
	 	});
	 		$stateProvider
	 	.state('/logo', {
	 		url: '/design/logo',
	 		templateUrl: 'inc/logo.html',
	 		controller: 'logoCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - Logo'
	 		}
	 	});
	 		$stateProvider
	 	.state('/stream', {
	 		url: '/stream',
	 		templateUrl: 'inc/stream.html',
	 		controller: 'streamCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - Stream'
	 		}
	 	});
			$stateProvider
	 	.state('/about', {
	 		url: '/about',
	 		templateUrl: 'inc/about.html',
	 		controller: 'aboutCtrl',
	 		data: {
	 			pageTitle: 'inet-pwnZ - About'
	 		}
	 	});


	}]);

// Title Directive
app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Default Title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);