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
        vm.currentPage = 1;

        vm.searchMovie = function (name, id) {

            if(id) {
                vm.currentPage = id;
            }

            vm.searchTitle = name;

            MovieFinderFactory.generalSearch(name, vm.currentPage).then(
                function(response) {
                    $state.params = {};

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

        vm.goToProjectDetail = function (id) {
            $state.go('details', { 
                    movieId : id,
                    previousState: {
                        searchTitle: vm.searchTitle,
                        currentPage: vm.currentPage
                    } 
                });          
        };

        if($state.params.previousState) {
            vm.searchMovie($state.params.previousState.searchTitle, $state.params.previousState.currentPage);
        }

    }
})();