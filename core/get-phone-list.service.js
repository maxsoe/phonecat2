angular
  .module('getPhoneList', [])
  .service('getPhoneList', function($http) {
    this.getPosts = function() {
      return $http.get('phones/phones.json');
    }
  });
