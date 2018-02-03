// Register `phoneList` component, along with its associated controller and template
angular.
module('phonecatApp').
component('phoneList', {
  template:
    '<p>Hi there {{phonelist.username}}</p>' +
    '<p>Total number of phones: {{phonelist.phones.length}}</p>' +
    '<ul>' +
    '<li ng-repeat="phone in phonelist.phones">' +
    '<span>{{phone.name}}</span>' +
    '<p>{{phone.snippet}}</p>' +
    '</li>' +
    '</ul>',
  controller: PhoneListControllerLesson3,
  controllerAs: 'phonelist'
});

function PhoneListControllerLesson3() {
  this.phones = [{
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.'
  }, {
    name: 'Motorola XOOM™ with Wi-Fi',
    snippet: 'The Next, Next Generation tablet.'
  }, {
    name: 'MOTOROLA XOOM™',
    snippet: 'The Next, Next Generation tablet.'
  }];
  this.username = "Max Soe"
}
