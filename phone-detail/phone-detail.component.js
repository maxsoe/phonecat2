// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('phoneDetail', [
    'checkmark',
    'ui.router',
    'getPhoneDetailServ'
  ])
  .component('phoneDetail', {
    // template: 'TBD: Detail view for <span>{{phoneDetailCtrl.phoneId}}</span>',
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController,
    controllerAs: 'phoneDetailCtrl'
  });

function PhoneDetailController($stateParams, getPhoneDetailServ) {
  this.phoneId = $stateParams.phoneId;

  // console.log("phoneId is " + this.phoneId);

  this.setImage = function setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  };

  getPhoneDetailServ.getPosts(this.phoneId).then(response => {
    this.phone = response.data;
    // console.log(this.phone);
    this.setImage(this.phone.images[0]);
  });
};
