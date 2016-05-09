(function() {
    'use strict';

    angular.module('MovieFinderApp')
        .factory('MovieFinderFactory', [
            '$q',
            '$log',
            '$http',
            function($q, $log, $http) {

            var service = {
                generalSearch: generalSearch,
                specificSearch: specificSearch
            };

            var url = 'http://www.omdbapi.com/?';
            return service;

            function generalSearch(movie, id) {
                var defer = $q.defer();

                $http({
                        method: 'GET',
                        url: url,
                        params: {
                            s: movie,
                            page: id,
                            r: 'json'
                        }
                    })
                    .then(
                        function(response) {
                            if (typeof response.data === 'object') {
                                defer.resolve(response);
                                toastr.success("Search Information for " + movie);
                            } else {
                                defer.reject(response);
                                toastr.warning("No information found <br/>" + response.config.url);
                            }
                        },
                        function(error) {
                            defer.reject(error);
                            $log.error(error);
                            toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                        });
                    return defer.promise;

            };

            function specificSearch(imdbid) {
                var defer = $q.defer();

                $http({
                        method: 'GET',
                        url: url,
                        params: {
                            i: imdbid,
                            plot: 'full',
                            r: 'json',
                            tomatoes: true,
                        }
                    })
                    .then(
                        function(response) {
                            if (typeof response.data === 'object') {
                                defer.resolve(response);
                                toastr.success("Movie Information for " + response.title);
                            } else {
                                defer.reject(response);
                                toastr.warning("No movie information found for <br/>" + response.config.url);
                            }
                        },
                        function(error) {
                            defer.reject(error);
                            $log.error(error);
                            toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                        }
                    );
                return defer.promise;


            };
        }]);
})();