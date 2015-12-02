/**
 * Created by Christian on 30/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('LeagueShellCtrl', LeagueShellCtrl);

    LeagueShellCtrl.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function LeagueShellCtrl($state, $stateParams) {
        var vm = this;
        vm.leagueId = $stateParams.leagueId;
        vm.tabs = [
            {text: 'Teams', state: 'league.teams'},
            {text: 'Games', state: 'league.games'},
            {text: 'Games Calendar', state: 'league.games-calendar'},
            {text: 'Home', state: 'league.home'}
        ];

        activate();

        ////////////////

        function activate() {
            _.each(vm.tabs, function(tab){
                tab.active = ($state.current.name === tab.state);
            });
        }
    }

})();

