(function() {
    'use strict';

    angular
        .module('MovieFinderApp')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$log', '$state', 'MovieFinderFactory'];

    /* @ngInject */
    function MovieDetailController($log, $state, MovieFinderFactory) {
        var vm = this;
        vm.title = 'MovieDetailController';
        vm.details = {};
        
        MovieFinderFactory.specificSearch($state.params.movieId)
            .then(function(response) {
                vm.details = response.data;
            }),function(error) {
                $log.error('failure getting data', error);
            };

        vm.goBack = function() {
            $state.go('main', $state.params);
        };             
    }
    

    
})();