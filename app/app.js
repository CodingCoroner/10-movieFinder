(function() {
    'use strict';

    var MovieFinderApp = angular
        .module('MovieFinderApp', ['ui.router']);

    MovieFinderApp.config([
    	'$stateProvider',
    	'$urlRouterProvider',
    	function($stateProvider, $urlRouterProvider) {
	    
    	$urlRouterProvider.otherwise('main');

        // Now set up the states
        $stateProvider
	        .state('main', {
				url: "/main",
				templateUrl: "app/partials/main.html",
				controller: "MovieController",
				controllerAs: "vm",
				params: {
					movieId: null,
					previousState : {
						searchTitle: null,
						currentPage: null
					}
				}
	        }).state('details', {
				url: "/details",
				templateUrl: "app/partials/details.html",
				controller: 'MovieDetailController',
				controllerAs: 'vm',
				params: {
					movieId: null,
					previousState : {
						searchTitle: null,
						currentPage: null
					}
				}
	    	})
    }]);
})();