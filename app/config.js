(function() {
	
	'use strict';

	angular.module('app').config(location);

	location.$inject = ['$locationProvider'];
	function location ($locationProvider) {
		$locationProvider.html5Mode(true);
	}

})();