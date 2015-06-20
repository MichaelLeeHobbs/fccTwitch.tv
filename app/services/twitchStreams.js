angular.module('myApp.services', ['ngResource'])
    .factory('twitchStreams', function ($resource, $http) {
        var streamsToGet = ["freecodecamp", "MedryBW", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];
        var streams = {};
        streamsToGet.forEach(function (name) {
            streams[name] = $resource('https://api.twitch.tv/kraken/:verb:name?callback=JSON_CALLBACK',
                {}, {
                    queryStream: {method: 'JSONP', params: {verb: 'streams/', name: name}, isArray: false},
                    queryUser: {method: 'JSONP', params: {verb: 'users/', name: name}, isArray: false},
                    cache: true
                }
            );
        });
        return streams;
    });