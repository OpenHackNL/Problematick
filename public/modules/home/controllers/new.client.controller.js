'use strict';

angular.module('home').controller('NewController', ['$scope',
	function($scope) {


    // ---------------------------------
    // Add a problem
    // ---------------------------------

    $scope.problem = [];
    $scope.problem.anonymous = false;

    $scope.newProblem = function(isValid) {
      if (isValid) {
        $scope.success = $scope.error = null;
        var problem = new Problems($scope.problem);

        problem.$update(function(response) {
          $scope.success = true;
        }, function(response) {
          $scope.error = response.data.message;
        });
      } else {
        $scope.submitted = true;
      }
    };

	}
]);