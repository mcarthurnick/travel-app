angular.module('travapp')
.controller('loginCtrl', function($scope, loginService){

    $scope.createUser = function(newUser) {
      loginService.newUser(newUser);
    },

    $scope.userLogin = function(user){
      console.log('userLogin', user);
      loginService.userLogin(user);
    };

});
