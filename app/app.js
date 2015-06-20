'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.services',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.version'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .directive('streamElement', function () {
        return {
            scope: {
                data: '='
            },
            restrict: 'E',
            replace: 'true',
            templateUrl: 'directives/stream/stream-directive.html'
        };
    });
