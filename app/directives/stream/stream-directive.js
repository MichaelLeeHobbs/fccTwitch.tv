'use strict';

angular.module('myApp.stream-directive', [])
    .directive('streamElement', [function () {
        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            replace: 'true',
            templateUrl: 'directives/stream/stream-directive.html'
        };
    }]);