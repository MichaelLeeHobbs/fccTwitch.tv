'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl',
            resolve: {
                streams: function (twitchStreams) {
                    return getStreams(twitchStreams);
                }
            }
        });
    }])

    .controller('View3Ctrl', ['$scope', 'streams', function ($scope, streams) {
        $scope.streams = formatStreams(streams);
    }]);