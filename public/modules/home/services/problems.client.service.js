'use strict';

angular.module('home').factory('Problems', [
  function($resource) {
    return $resource('problems', {}, {
      update: {
        method: 'POST'
      }
    });
  }
]);