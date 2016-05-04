angular.module('travapp').service('loginService', function($q, $http, $state) {
  var baseUrl = 'http://localhost:4000/';

  this.userLogin = function(user){
    return $http({
      method: 'GET',
      data: user,
      url: '/login'
    }).success(function(){
      $state.go('dashboard');
    });
  };

  this.newUser = function(newUser) {
    return $http({
      method: 'POST',
      data: newUser,
      url: '/register'
    }).success(function(){
      $state.go('dashboard');
    });
  };

  this.getProfile = function() {
    return $http({
      method: 'GET',
      url: '/user/current'
    });
  };
})
