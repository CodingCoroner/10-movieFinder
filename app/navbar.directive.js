(function() {
    'use strict';

    angular
        .module('MovieFinderApp')
        .directive('movieNavbar', directive);

    directive.$inject = [];

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
        	templateUrl: 'app/partials/navbar.html',
            restrict: 'EA',
            scope: {
            }
        };

        return directive;
    }

})();