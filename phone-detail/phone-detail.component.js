// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('phoneDetail', ['ui.router'])
  .component('phoneDetail', {
    template: 'TBD: Detail view for <span>{{phoneDetailCtrl.phoneId}}</span>',
    controller: PhoneDetailController,
    controllerAs: 'phoneDetailCtrl'
  });

  function PhoneDetailController($stateParams) {
    this.phoneId = $stateParams.phoneId;
  };
