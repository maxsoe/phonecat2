angular
.module('phonecatApp')
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

// TODO: phone details state

  var phoneDetailState = {
    name: 'posts.incomplete',
    url: '/incomplete',
    template: '<posts-list posts="vm.incompletePosts"></posts-list>'
  };

  var postsCompleteState = {
    name: 'posts.complete',
    url: '/complete',
    template: '<posts-list posts="vm.completePosts"></posts-list>'
  };
  //
  $stateProvider
  .state(homeState)
  .state(phonesListState)
  .state(phoneDetailState);
});
