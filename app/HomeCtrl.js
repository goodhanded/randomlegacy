(function() {
	
	'use strict';

	angular.module('app').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', '$location', '$window', 'data', 'roll', 'roller', 'serializer'];

	function HomeCtrl ($scope, $location, $window, data, roll, roller, serializer) {

		$scope.data = data;
		$scope.roll = roll;
		$scope.roller = roller;
		$scope.isActive = isActive;		
		$scope.setInfo = setInfo;	
		$scope.tooFew = tooFew;
		$scope.activeTab = 'roll';

		var saved;

		if (saved = $location.search().roll) {
			roller.loadRoll(saved);
		}

		function isActive (tab) {
			return $scope.activeTab === tab;
		}

		function setInfo (info) {
			$scope.info = info;
		}

		function tooFew (collection, min) {
			var min = min || 3;
			var count = 0;

			for (var ndx = 0; ndx < collection.length; ndx++) 
				if (collection[ndx].on)
					count++;

			return (count <= min) ? true : false;
		}

	}

})();