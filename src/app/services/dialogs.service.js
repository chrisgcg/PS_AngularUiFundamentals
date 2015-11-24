(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .factory('dialogsService', dialogsService);

    dialogsService.$inject = ['$modal'];

    /* @ngInject */
    function dialogsService($modal) {
        var service = {
            confirm: confirm
        };
        return service;

        ////////////////

        function confirm(message, title, buttons) {
            var modalInstance = $modal.open({
                templateUrl: '/app/shared/confirm-modal.html',
                controller: 'ConfirmModalCtrl',
                controllerAs: 'vm',
                resolve: {
                    data: function(){
                        return {
                            title: 'Delete?',
                            message: 'Are you sure?',
                            buttons: ['OK', 'Cancel']
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }
    }

})();

