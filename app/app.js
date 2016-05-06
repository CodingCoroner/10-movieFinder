(function() {
    'use strict';

    var MovieFinderApp = angular
        .module('MovieFinderApp', ['ui.router']);

    MovieFinderApp.config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /state1
	    $urlRouterProvider.otherwise("/main");
	    
        // Now set up the states
        $stateProvider
	        .state('main', {
				url: "/main",
				templateUrl: "app/partials/main.html",
				controller: "MovieController",
				controllerAs: "vm"
	        }).state('main.details', {
				url: "details/:movieID",
				templateUrl: "app/partials/details.html",
				controller: 'MovieDetailController',
				controllerAs: 'vm',
				
				/*params: {
	            	movieId: null
	        	}*/
	    	});
    });
})();