(function() {
	
	'use strict';

	angular.module('app').directive('rlcRollDisplay', rlcRollDisplay);

	function rlcRollDisplay () {

		return {

			restrict: 'E',
			replace: true,
			templateUrl: 'rollDisplay.html',
			scope: true,
			controller: RollDisplayCtrl

		}

		RollDisplayCtrl.$inject = ['$scope', 'roll'];
		function RollDisplayCtrl ($scope, roll) {
			$scope.roll = roll;
		}

	}

})();