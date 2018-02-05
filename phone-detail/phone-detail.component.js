// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('phoneDetail', ['ui.router', 'getPhoneDetailServ'])
  .component('phoneDetail', {
    // template: 'TBD: Detail view for <span>{{phoneDetailCtrl.phoneId}}</span>',
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController,
    controllerAs: 'phoneDetailCtrl'
  });

function PhoneDetailController($stateParams, getPhoneDetailServ) {
  this.phoneId = $stateParams.phoneId;

  console.log("phoneId is " + this.phoneId);

  getPhoneDetailServ.getPosts(this.phoneId).then(response => {
    this.phone = response.data;
    console.log(this.phone);
  });
};
