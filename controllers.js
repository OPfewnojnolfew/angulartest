var testApp = angular.module('testApp', []);

testApp.controller('testCtrl', function($scope) {
    $scope.showForm = true;
    $scope.name = 'xxx';
    $scope.submitName = function() {
        if (this.name === 'xxx') {
            alert('no!!!');
            return;
        }
        console.log(this.name);
        this.showForm = false;
    };
    $scope.phones = [{
        'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.'
    }, {
        'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'
    }, {
        'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.'
    }];
});
