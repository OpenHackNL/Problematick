'use strict';

angular.module('home').directive('rants', [
    "Problemresource",
	function(Problemresource) {
		return {
			templateUrl: 'modules/home/views/home.rants.html',
			restrict: 'EA',
			link: function postLink(scope, element, attrs) {
				//TODO fetch this from resource
				scope.rants = [
                    {
                        headline: "Hey die vuilniszakken he..., kap met die naast de container te zetten!!!!",
                        date: "2015-05-01",
                        signature: "Een buurtbewone"
                    },
                    {
                        headline: "Wordt deze lantaarnpaal nog eens gefixt of wat?",
                        date: "2015-03-15",
                        signature: "Een bezorgde burger",
                        upVotesCount: 14
                    },
                    {
                        headline: "Misschien leuk om ook je vuurwerk eens op te ruimen. Vorig jaar ook al zo'n teringbende.",
                        date: "2013-01-01"
                    }
                ];

                scope.rants = Problemresource.getAll();
			}
		};
	}
]);