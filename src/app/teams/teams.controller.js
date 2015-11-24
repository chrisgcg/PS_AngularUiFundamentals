/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('TeamsCtrl', TeamsCtrl);


    TeamsCtrl.$inject = ['$location', '$routeParams', 'initialData'];

    /* @ngInject */
    function TeamsCtrl($location, $routeParams, initialData) {
        var vm = this;
        vm.title = 'TeamsCtrl';
        vm.go = go;

        activate();

        ////////////////

        function activate() {
            //
        }

        function go(path) {
            $location.path('leagues/' + $routeParams.id + '/' + path);
        }
    }

})();

