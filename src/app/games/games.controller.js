/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('GamesCtrl', GamesCtrl);

    GamesCtrl.$inject = ['$location', '$routeParams', 'initialData'];

    /* @ngInject */
    function GamesCtrl($location, $routeParams, initialData) {
        var vm = this;
        vm.title = 'GamesCtrl';
        vm.go = go;

        activate();

        ////////////////

        function activate() {

        }

        function go(path) {
            $location.path('leagues/' + $routeParams.id + '/' + path);
        }
    }

})();

