// Register `phoneList` component, along with its associated controller and template
angular
  .module('phoneList', ['getPhoneList'])
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListControllerLesson7,
    controllerAs: 'phonelistCtrl'
  });

function PhoneListControllerLesson3() {
  this.phones = [{
    name: 'Nexus S',
    snippet: 'Fast just got faster with Nexus S.',
    age: 1
  }, {
    name: 'Motorola XOOM™ with Wi-Fi',
    snippet: 'The Next, Next Generation tablet.',
    age: 2
  }, {
    name: 'MOTOROLA XOOM™',
    snippet: 'The Next, Next Generation tablet.',
    age: 3
  }];
  this.username = "Max Soe";
  this.orderProp = 'age';
};

function PhoneListControllerLesson7(getPhoneList) {
  getPhoneList.getPosts().then(response => {
    this.phones = response.data;
  });
  this.username = "Max Soe";
  this.orderProp = 'age';
};
