angular
  .module('getPhoneListServ', [])
  .service('getPhoneListServ', function($http) {
    this.getPosts = function() {
      return $http.get('phones/phones.json');
    }
  });
