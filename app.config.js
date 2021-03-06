angular
  .module('phonecatApp')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('pink')
      .warnPalette('orange')
      .backgroundPalette('grey');
  })
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'home',
      url: '/'
    };

    var phonesListState = {
      name: 'phones',
      url: '/phones',
      template: '<phone-list></phone-list>'
    };

    var phoneDetailState = {
      name: 'phoneDetail',
      url: '/phones/:phoneId',
      template: '<phone-detail></phone-detail>'
    }

    $stateProvider
      .state(homeState)
      .state(phonesListState)
      .state(phoneDetailState);
  });
