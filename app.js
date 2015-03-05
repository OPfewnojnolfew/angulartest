var pvd = angular.module('pvd', []);
pvd.config([$routeProvider,
    function($routeProvider) {
        $routeProvider.when('/app/addUser', {
            templateUrl: 'app/addUser.html',
            controller: AddNewCustomerController
        });
    }
]);
