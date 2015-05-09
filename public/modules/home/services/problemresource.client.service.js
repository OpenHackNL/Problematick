'use strict';

angular.module('home').factory('Problemresource', [
    '$resource',
	function($resource) {
		// Problemresource service logic
		// ...

        var problemResource = $resource('/problem/:id');

		// Public API
		return {
			getAll: function(succ, err){
                return problemResource.query(succ, err);
            },
            insert: function(data, succ, err){
                return problemResource.save(data, succ, err);
            }
		};
	}
]);