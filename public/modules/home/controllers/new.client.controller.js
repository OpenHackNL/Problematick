'use strict';

angular.module('home').controller('NewController', ['$scope', 'geolocation', 'Problemresource', '$timeout', '$location', 'NavigatorGeolocation',
	function($scope, geolocation, Problemresource, $timeout, $location, NavigatorGeolocation) {


    // ---------------------------------
    // Add a problem
    // ---------------------------------

    $scope.problem = {};
    $scope.problem.anonymous = false;

    $scope.newProblem = function(isValid) {
      if (isValid) {
        $scope.success = $scope.error = null;

          Problemresource.insert($scope.problem, function(){
              $scope.success = true;
              $timeout(function(){
                $location.url('/');
              }, 500);
          }, function(err){
              $scope.error = err;
          });

//        var problem = new Problems($scope.problem);
//
//        problem.$update(function(response) {
//          $scope.success = true;
//        }, function(response) {
//          $scope.error = response.data.message;
//        });
      } else {
        $scope.submitted = true;
      }
    };


//        };

        NavigatorGeolocation.getCurrentPosition()
            .then(function(position) {
                $scope.problem.lat =  position.coords.latitude;
                $scope.problem.lng =  position.coords.longitude;
//                console.log($scope.problem);
            });

	}
]);