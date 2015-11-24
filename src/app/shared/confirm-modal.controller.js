/**
 * Created by Christian on 23/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .controller('ConfirmModalCtrl', ConfirmModalCtrl);

    ConfirmModalCtrl.$inject = ['$modalInstance', 'data'];

    /* @ngInject */
    function ConfirmModalCtrl($modalInstance, data) {
        var vm = this;
        vm.title = 'ConfirmModalCtrl';

        vm.cancel = cancel;
        vm.ok = ok;
        vm.properties = data;

        function cancel(){
            $modalInstance.dismiss();
        }

        function ok(){
            $modalInstance.close();
        }
    }

})();

