/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('LeagueHomeCtrl', LeagueHomeCtrl);

    LeagueHomeCtrl.$inject = ['initialData'];

    /* @ngInject */
    function LeagueHomeCtrl(initialData) {
        var vm = this;
        vm.title = 'LeagueHomeCtrl';

        activate();

        ////////////////

        function activate() {

        }

    }

})();

