'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            resolve: {
                streams: function (twitchStreams) {
                    return getStreams(twitchStreams);
                }
            }
        });
    }])
    .controller('View1Ctrl', ['$scope', 'streams', function ($scope, streams) {
        $scope.streams = formatStreams(streams);
    }]);