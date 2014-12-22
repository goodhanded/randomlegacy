(function() {
	
	'use strict';

	angular.module('app').value('util', {

    	randomInt: function (min, max) {
        	return Math.floor(Math.random() * (max - min + 1)) + min;
    	}

    });

})();