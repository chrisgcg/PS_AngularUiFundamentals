/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('GamesCtrl', GamesCtrl);

    GamesCtrl.$inject = ['$modal', '$location', '$stateParams', 'initialData', 'eliteApi', 'dialogsService'];

    /* @ngInject */
    function GamesCtrl($modal, $location, $stateParams, initialData, eliteApi, dialogs) {
        var vm = this;

        vm.deleteItem = deleteItem;
        vm.editItem = editItem;
        vm.games = initialData.games;
        vm.locations = initialData.locations;
        vm.locationsLookup = {};
        vm.teams = initialData.teams;
        vm.teamsLookup = {};

        vm.calendarConfig = {
            height: 550,
            header:{
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            defaultView: 'agendaDay',
            firstHour: 8
        };

        //vm.eventSources

        activate();

        ////////////////

        function activate() {
            _.forEach(vm.teams, function(team){
                vm.teamsLookup[team.id] = team.name;
            });

            _.forEach(vm.locations, function(location){
                vm.locationsLookup[location.id] = location.name;
            });

            var gameEvents = _.map(vm.games, mapToGameEvent);
            vm.eventSources = [gameEvents];
        }

        function mapToGameEvent(game){
            return{
                id: game.id,
                start: game.time,
                title: vm.teamsLookup[game.team1Id] + ' vs. ' + vm.teamsLookup[game.team2Id],
                allDay: false,
                durationEditable: false,
                end: moment(game.time).add(1, 'hour').toDate()
            };
        }

        function deleteItem(id){
            dialogs.confirm('Are you sure you want to Delete this item?', 'Delete?', ['OK', 'Cancel'])
                .then(function(){
                    eliteApi.deleteGame(id).then(function(data){
                        _.remove(vm.games, { 'id': id });
                    });
                });
        }

        function editItem(game){
            var modalInstance = $modal.open({
                templateUrl: '/app/games/edit-game.html',
                controller: 'EditGameCtrl',
                controllerAs: 'vm',
                resolve: {
                    data: function() {
                        return {
                            locations: _.sortBy(vm.locations, 'name'),
                            teams: _.sortBy(vm.teams, 'divisionName, name'),
                            itemToEdit: game
                        };
                    }
                }
            });

            modalInstance.result.then(function(result){
                result.leagueId = $stateParams.id;
                eliteApi.saveGame(result).then(function(data){
                    if (game){
                        _.assign(game, data);
                        var index = _.findIndex(vm.eventSources[0], { 'id': game.id });
                    } else{
                        vm.games.push(data);
                    }
                });
            });
        }
    }

})();

