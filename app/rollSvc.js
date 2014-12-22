(function() {
	
	'use strict';

	/* 
	 * This object represents the current roll state. These values are bound
	 * to the home controller's scope for display when the Roll buttons are pressed.
	 */
	angular.module('app').value('roll', {

    	hasRolled: false,
    	maritalStatus: {},
    	children: {},
    	primaryCareer: {},
    	secondaryCareers: [],
    	generationalGoal: {},
    	miscellaneousFun: {},
        midlifeCrises: []

    });

})();