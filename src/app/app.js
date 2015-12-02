(function () {
    'use strict';
    var app = angular.module('eliteAdmin', [
        // Angular modules
        //'ngRoute',

        // 3rd Party Modules
        'ui.bootstrap',
        'ui.router',
        'ui.calendar'
    ]);

    //app.config(['$routeProvider', configRoutes]);
    app.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state('leagues',{
                url: '/leagues',
                templateUrl: 'app/leagues/leagues.html',
                controller: 'LeaguesCtrl',
                controllerAs: 'vm',
                resolve: {
                    initialData: ['eliteApi', function(eliteApi){
                        return eliteApi.getLeagues();
                    }]
                }
            })
            .state('league', {
                url: '/leagues/:leagueId',
                abstract: true,
                controller: 'LeagueShellCtrl',
                controllerAs: 'vm',
                templateUrl: 'app/layout/league-shell.html'
            })
            .state('league.teams', {
                url: '/teams',
                views: {
                    'tabContent':{
                        templateUrl: 'app/teams/teams.html',
                        controller: 'TeamsCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            initialData: ['$stateParams', 'eliteApi', function ($stateParams, eliteApi) {
                                return eliteApi.getTeams($stateParams.leagueId);
                            }]
                        }
                    }
                }
            })
            .state('league.games', {
                url: '/games',
                views: {
                    'tabContent':{
                        templateUrl: 'app/games/games.html',
                        controller: 'GamesCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            initialData: ['$stateParams', 'gamesInitialDataService', function ($stateParams, gamesInitialDataService) {
                                return gamesInitialDataService.getData($stateParams.leagueId);
                            }]
                        }
                    }
                }
            })
            .state('league.games-calendar', {
                url: '/games-calendar',
                views: {
                    'tabContent':{
                        templateUrl: 'app/games/games-calendar.html',
                        controller: 'GamesCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            initialData: ['$stateParams', 'gamesInitialDataService', function ($stateParams, gamesInitialDataService) {
                                return gamesInitialDataService.getData($stateParams.leagueId);
                            }]
                        }
                    }
                }
            })
            .state('league.home', {
                url: '/league-home',
                views: {
                    'tabContent':{
                        templateUrl: 'app/league-home/league-home.html',
                        controller: 'LeagueHomeCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            initialData: ['$stateParams', 'eliteApi', function ($stateParams, eliteApi) {
                                return eliteApi.getLeague($stateParams.leagueId);
                            }]
                        }
                    }}
            });

        $urlRouterProvider.otherwise('/');
    }

    app.run(['$state', 'stateWatcherService', function ($state, stateWatcherService) {
        // Include $route to kick start the router.
    }]);
})();
