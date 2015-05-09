'use strict';

angular.module('home').controller('NewController', ['$scope', 'geolocation',
	function($scope, geolocation) {


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

    //retrieve coordinates of user using Geolocation API
    geolocation.getLocation().then(function(data){

      //success getting coordinates
      $scope.coords = data.coords;

    }, function(error) {

      //unable to get coordinates
      console.log(error);

    });

	}
]);