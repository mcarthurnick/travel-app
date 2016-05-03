angular.module('travapp')
  .service('userService', function($http, $scope){

    this.createUser = function(){
      return $http({
        method: 'POST',
        url: '/user'
      }).then(function(res){
        console.log(res.data, 'this is your createUser res.data');
        return res.data;
      });
    };
  });
