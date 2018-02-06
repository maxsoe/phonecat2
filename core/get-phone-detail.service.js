angular
  .module('getPhoneDetailServ', [])
  .service('getPhoneDetailServ', function($http) {
    this.getPosts = function(parameter) {
      // console.log("the parameter is " + parameter);
      var url = 'phones/' + parameter + '.json';
      // console.log("the url is " + url);
      return $http.get(url);
    }
  });
