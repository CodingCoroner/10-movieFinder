(function() {
    'use strict';

    angular
        .module('MovieFinderApp')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$log', '$stateParams', 'MovieFinderFactory'];

    /* @ngInject */
    function MovieDetailController($log, $stateParams, MovieFinderFactory) {
        var vm = this;
        vm.title = 'MovieDetailController';
        vm.details = {};

        console.log($stateParams);
        
        MovieFinderFactory.specificSearch($stateParams.movieID)
            .then(function(response) {
                vm.details = response.data;
                console.log(vm.details);
            }),function(error) {
                $log.error('failure getting data', error);
                }             
    }
    

    
})();