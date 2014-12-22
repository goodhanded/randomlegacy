(function() {
	
	'use strict';

	angular.module('app').factory('roller', roller);

	roller.$inject = ['data', 'roll', 'odds', 'serializer']
	function roller (data, roll, odds, serializer) {

		return {
			loadRoll: loadRoll,
			rollAttr: rollAttr,
			rollAll: rollAll
		}

		function loadRoll (savedRoll) {
			var extracted = serializer.deserialize(savedRoll);
			expandRoll(extracted);
			setPermalink();
		}

		function expandRoll (minified) {
			roll.maritalStatus = getAttr(data.maritalStatuses, minified.m);
			roll.children = getAttr(data.children, minified.c);
			roll.primaryCareer = {};
			roll.primaryCareer.careerType = getAttr(data.careerTypes, minified.p.t);
			roll.primaryCareer.jobs = [];
			for (var ndx = 0; ndx < minified.p.j.length; ndx++) {
				roll.primaryCareer.jobs.push(expandJob(minified.p.t, minified.p.j[ndx]));
			}
			roll.secondaryCareers = [];
			for (var ndx = 0; ndx < minified.s.length; ndx++) {
				var career = {};
				career.careerType = getAttr(data.careerTypes, minified.s[ndx].t);
				career.jobs = [];
				for (var ndy = 0; ndy < minified.s[ndx].j.length; ndy++) {
					career.jobs.push(expandJob(minified.s[ndx].t, minified.s[ndx].j[ndy]));
				}
				roll.secondaryCareers.push(career);
			}
			roll.generationalGoal = getAttr(data.generationalGoals, minified.g);
			roll.miscellaneousFun = getAttr(data.miscellaneousFun, minified.f);
			roll.midlifeCrises = [];
			for (var ndx = 0; ndx < minified.r.length; ndx++) {
				roll.midlifeCrises.push(getAttr(data.midlifeCrises, minified.r[ndx]));
			}
			roll.hasRolled = true;
		}

		function expandJob (typeId, jobId) {
			switch (typeId) {
				case 1:
				case 3:
					return getAttr(data.conventionalCareers, jobId);
				case 2:
					return getAttr(data.unconventionalCareers, jobId);
			}

			return null;
		}

		function getAttr (collection, id) {
			for (var ndx = 0; ndx < collection.length; ndx++)
				if (collection[ndx].id == id)
					return collection[ndx];
			return null;
		}

		function rollAll () {
			rollAttr('marital_status');
			rollAttr('children');
			rollAttr('primary_career');
			rollAttr('secondary_careers');
			rollAttr('generational_goal');
			rollAttr('miscellaneous_fun');
			roll.hasRolled = true;
			setPermalink();
		}

		function rollAttr (attribute) {
			switch (attribute) {
				case 'marital_status':
					rollMaritalStatus();
					break;
				case 'children':
					rollChildren();
					break;
				case 'primary_career':
					rollPrimaryCareer();
					break;
				case 'secondary_careers':
					rollSecondaryCareers();
					break;
				case 'generational_goal':
					rollGenerationalGoal();
					break;
				case 'miscellaneous_fun':
					rollMiscellaneousFun();
					break;
				case 'midlife_crises':
					rollMidlifeCrises();
					break;
			}
			setPermalink();
		}

		function rollMaritalStatus () {

			roll.maritalStatus = odds.maritalChance(data.maritalStatuses);
			var diff = roll.maritalStatus.numSecondaryCareers - roll.secondaryCareers.length;
			if (diff > 0)
				addSecondaryCareer(diff);
			else if (diff < 0)
				removeSecondaryCareer(0 - diff);

		}

		function rollChildren () {
			roll.children = odds.childrenChance(data.children);
			if (!valid(roll.miscellaneousFun)) rollMiscellaneousFun();
		}

		function rollPrimaryCareer () {

			var career = {};
			career.careerType = odds.primaryTypeChance(data.careerTypes);
			career.jobs = getJobs(career.careerType);
			roll.primaryCareer = career;

			if (!valid(roll.generationalGoal)) rollGenerationalGoal();

		}

		function rollSecondaryCareers () {

			roll.secondaryCareers = [];

			for (var ndx = 0, c = roll.maritalStatus.numSecondaryCareers; ndx <= c - 1; ndx++ ) {
				addSecondaryCareer();
			}

			if (!valid(roll.generationalGoal)) rollGenerationalGoal();

		}

		function rollGenerationalGoal () {
			roll.midlifeCrises = [];
			do {
				roll.generationalGoal = odds.equalChance(data.generationalGoals);
			} while (!valid(roll.generationalGoal));
		}

	    function valid (goal) {
	        switch(goal.name) {
	            case 'Perfect Careers':
	            case 'Dependable':
	                if(roll.primaryCareer.careerType.name == 'Conventional Career')
	                    return true;
	                for(var ndx = 0; ndx < roll.secondaryCareers.length; ndx++) {
	                    if(roll.secondaryCareers[ndx].careerType.name == 'Conventional Career')
	                        return true;
	                }
	                return false;
	                break;
	            case 'Half-Siblings':
	                if(roll.children.name == '1 Child')
	                    return false;
	                else
	                    return true;
	            default:
	                return true;
	        }
	    }

		function rollMiscellaneousFun () {
			do {
				roll.miscellaneousFun = odds.equalChance(data.miscellaneousFun);
			} while (!valid(roll.miscellaneousFun));
		}

		function rollMidlifeCrises () {
			var crises = [];
			do {
				var crisis = odds.equalChance(data.midlifeCrises);
				if (!found(crisis, crises)) crises.push(crisis);
			} while (crises.length < 3);
			roll.midlifeCrises = crises;
		}

		function getJobs (careerType) {
			var jobs = [];
			switch(careerType.name) {

				case 'Conventional Career':
					jobs.push(odds.equalChance(data.conventionalCareers));
					break;

				case 'Unconventional Career':
					jobs.push(odds.equalChance(data.unconventionalCareers));
					break;

				case 'Career Hopper':
					do {
						var job = odds.equalChance(data.conventionalCareers);
						if (!found(job, jobs)) jobs.push(job);
					} while (jobs.length < 5);
					break;

			}

			return jobs;
		}

		function found (needle, haystack) {
			for (var ndx = 0, c = haystack.length; ndx < c; ndx++)
				if (haystack[ndx] === needle)
					return true;
			return false;
		}

		function addSecondaryCareer (num) {
			num = num || 1;

			for (var ndx = 0; ndx < num; ndx++) {
				var career = {};
				career.careerType = odds.secondaryTypeChance(data.careerTypes)
				career.jobs = getJobs(career.careerType);
				roll.secondaryCareers.push(career);
			}
		}

		function removeSecondaryCareer (num) {
			num = num || 1;

			for (var ndx = 0; ndx < num; ndx++) {
				roll.secondaryCareers.pop();
			}
		}

		function setPermalink () {
			roll.permalink = 'http://randomlegacy.com/?roll=' + serializer.serialize();
		}
	}

})();