/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('LeagueHomeCtrl', LeagueHomeCtrl);

    LeagueHomeCtrl.$inject = ['$location', '$routeParams','initialData'];

    /* @ngInject */
    function LeagueHomeCtrl($location, $routeParams, initialData) {
        var vm = this;
        vm.title = 'LeagueHomeCtrl';
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

