angular
	.module('app')
	.controller('aboutCtrl', function($rootScope, $scope, $timeout) {
		$scope.title = "About myself";
	 	$scope.size = " ";
	 	$scope.name = 'Daniel "inet-pwnZ" Nehrig';
	 	$scope.job = "Digital Artist & Creative Director";
	 	$scope.bio = "Be it 3D art, 2D art, vector illustrations, photography, motion graphics, full stack web designs/development. inet-pwnZ can call himself a creative, experienced in almost every area in art and this is what his work reflects.";
	 	$scope.about = "active";
	 	$scope.skills = "Skill";
	 	$scope.ready();
	 	$scope.ratings = [{
	 	name: "HTML5",
	 	numb: "m10",
        current: 6,
        max: 8
    }, {
    	name: "CSS3",
    	numb: "m20",
        current: 7,
        max: 8
    },
    	{
    	name: "SASS",
    	numb: "m30",
        current: 6,
        max: 8
    }, 
    	{
    	name: "JavaScript",
    	numb: "m40",
        current: 4,
        max: 8
    },
    	{
    	name: "jQuery",
    	numb: "m50",
        current: 5,
        max: 8
    },
    	{
    	name: "AngularJS",
    	numb: "m60",
        current: 5,
        max: 8
    }];
	 });
angular
	.module('app')
	.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<i ng-repeat="star in stars" ng-class="star" class="fa fa-star-o"></i>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});