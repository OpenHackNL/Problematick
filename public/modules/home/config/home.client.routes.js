'use strict';

//Setting up route
angular.module('home').config(['$stateProvider',
	function($stateProvider) {
		// Home state routing
		$stateProvider.
		state('new', {
			url: '/new',
			templateUrl: 'modules/home/views/new.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/home/views/home.client.view.html'
		});
	}
]);