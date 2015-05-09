'use strict';

angular.module('home').directive('rant', [
	function() {
		return {
			templateUrl: 'modules/home/views/home.rant.html',
			restrict: 'EA',
            scope: {
                rant: '=rant'
            },
			link: function postLink(scope, element, attrs) {
				// Rant directive logic
				// ...


			}
		};
	}
]);