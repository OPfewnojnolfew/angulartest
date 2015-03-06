define(function(require, exports, module) {
    var router = require('angular-route'),
        app = angular.module('mainModule', ['ngRoute']);
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/test', {
                templateUrl: 'test.html',
                controller: function() {
                    require('test');
                    return 'test';
                }
            }).when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).otherwise({
                redirectTo: '/phones'
            });
        }
    ]);
});
