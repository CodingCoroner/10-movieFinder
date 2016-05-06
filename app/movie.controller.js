(function() {
    'use strict';

    angular
        .module('MovieFinderApp')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['$state', '$log', 'MovieFinderFactory'];

    function MovieController($state, $log, MovieFinderFactory) {
        var vm = this;
        vm.title = 'MovieController';

        vm.pageRefTitle = "";
        

        vm.searchMovie = function (name, id) {

            if(!id) {
                id = 1;
            }

            vm.searchTitle = name;

            MovieFinderFactory.generalSearch(name, id).then(
                function(response) {
                    vm.movies = response.data.Search;

                    vm.totalResults = parseInt(response.data.totalResults);

                    var totalPages = Math.ceil(vm.totalResults / 10);

                    vm.totalPages = [];
                    for(var pageNum = 1; pageNum <= totalPages; ++pageNum) {
                        vm.totalPages.push(pageNum);
                    }
                    
                    

                    vm.pageRefTitle = name;
                },
                function(error) {
                    $log.error('failure getting data', error);
                });

        };

        /*vm.goToProjectDetail = function (id) {
            console.log(id);
            $state.go('details', { movieId : id} );          
        };*/

    }
})();