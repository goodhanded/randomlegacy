(function() {
	
	'use strict';

	angular.module('app').factory('serializer', serializer);

	serializer.$inject = ['data', 'roll']
	function serializer (data, roll) {

		return {
			serialize: serialize,
			deserialize: deserialize
		}


		function serialize () {

			if (!roll.hasRolled) return null;

			var result = {};

			result.m = roll.maritalStatus.id;
			result.c = roll.children.id;
			
			var pType = roll.primaryCareer.careerType.id;
			var pJobs = [];
			for (var ndx = 0, c = roll.primaryCareer.jobs.length; ndx < c; ndx++) {
				pJobs.push(roll.primaryCareer.jobs[ndx].id);
			}
			result.p = {
				t: pType,
				j: pJobs
			}

			var s = [];
			for (var ndx = 0, c = roll.maritalStatus.numSecondaryCareers; ndx <= c - 1; ndx++) {

				var sType = roll.secondaryCareers[ndx].careerType.id;
				var sJobs = [];
				for (var ndy = 0, d = roll.secondaryCareers[ndx].jobs.length; ndy < d; ndy++) {
					sJobs.push(roll.secondaryCareers[ndx].jobs[ndy].id);
				}
				s.push({t: sType, j: sJobs});
			}
			result.s = s;

			result.g = roll.generationalGoal.id;
			result.f = roll.miscellaneousFun.id;
			var r = [];
			for (var ndx = 0, c = roll.midlifeCrises.length; ndx < c; ndx++) {
				r.push(roll.midlifeCrises[ndx].id);
			}
			result.r = r;

			var serialized = encodeURIComponent(JSON.stringify(result));
			return serialized;

		}

		function deserialize (savedRoll) {

			return jQuery.parseJSON( decodeURIComponent(savedRoll) );

		}

	}

})();