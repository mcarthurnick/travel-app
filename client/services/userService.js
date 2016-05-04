angular.module('travapp')
  .service('userService', function($http, $scope){

    this.createUser = function(){
      return $http({
        method: 'POST',
        url: '/user'
      }).then(function(res){
        return res.data;
      });
    };

    this.userLogin = function(user) {
      return $http({
      method: 'GET',
      data: user,
      url: '/login'
      }).success(function() {
        $state.go('trip');
      });
    };

    this.getProfile = function() {
      return $http({
      method: 'GET',
      url: '/user/current'
    });
  };
});
