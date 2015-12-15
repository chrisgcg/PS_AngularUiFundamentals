/**
 * Created by Christian on 15/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('eliteAdmin')
        .directive('markdown', markdown);

    function markdown() {
        var converter = new Showdown.converter();

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
             attrs.$observe('markdown', function(value){
                var markup = converter.makeHtml(value);
                 element.html(markup);
             });
        }
    }

})();