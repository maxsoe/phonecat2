// Define the `phonecatApp` module
var myApp = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `myApp` module
myApp.controller('PhoneListControllerLesson2', function PhoneListControllerLesson2($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
  $scope.username = "Max";
});
