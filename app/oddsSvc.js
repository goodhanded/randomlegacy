(function() {
	
	'use strict';

    /*
     * This service represents the odds of various roll outcomes.
     */
	angular.module('app').factory('odds', odds);

    odds.$inject = ['util'];
    function odds (util) {

        return {

            equalChance: function (collection) {

                var tries = 100;
                do {
                    tries--;
                    var ndx = util.randomInt(1, collection.length);
                } while (collection[ndx - 1].on === false && tries > 0);

                return collection[ndx - 1];
            },

            maritalChance: function (collection) {

                var tries = 100;
                do {
                    tries--;
                    var roll = util.randomInt(1, 25);
                    var ndx;

                    if (roll <= 5)
                        ndx = 1;
                    else if (roll <= 15)
                        ndx = 2;
                    else
                        ndx = roll - 13; 
                } while (collection[ndx - 1].on === false && tries > 0);

                return collection[ndx - 1];
            },

            childrenChance: function (collection) {

                var tries = 100;
                do {
                    tries--;
                    var roll = util.randomInt(1, 10);
                    var ndx;

                    if (roll <= 2)
                        ndx = 1;
                    else if (roll <= 6)
                        ndx = 2;
                    else if (roll <= 8)
                        ndx = 3;
                    else
                        ndx = roll - 5;
                } while (collection[ndx - 1].on === false && tries > 0);

                return collection[ndx - 1];
            },

            primaryTypeChance: function (collection) {

                var tries = 100;
                do {
                    tries--;
                    var roll = util.randomInt(1, 10);
                    var ndx;

                    if (roll <= 6)
                        ndx = 1;
                    else if (roll <= 9)
                        ndx = 2;
                    else
                        ndx = 3;
                } while (collection[ndx - 1].on === false && tries > 0);

                return collection[ndx - 1];
            },

            secondaryTypeChance: function (collection) {

                var tries = 100;
                do {
                    tries--;
                    var roll = util.randomInt(1, 10);
                    var ndx;

                    if (roll <= 3)
                        ndx = 1;
                    else if (roll <= 8)
                        ndx = 2;
                    else if (roll <= 9)
                        ndx = 3;
                    else
                        ndx = 4;
                } while (collection[ndx - 1].on === false && tries > 0);

                return collection[ndx - 1];
            },
        }
    }

})();