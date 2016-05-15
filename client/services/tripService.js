angular.module('travapp')
  .service('tripService', function($q, $http, $stateParams){
    this.getTrips = function(){
    return $http({
      method: 'GET',
      url: '/trip'
    }).then(function(res){
      return res.data;
      });
    };

    this.getTripDetail = function(id){
      return $http({
        method: "GET",
        url: '/trip/' + id
      });
    };


    this.createTrip = function(destination, arrivalDate, departDate, amountToSave, amountDeposited){
      return $http({
        data: {destination: destination, arrivalDate: arrivalDate, departDate: departDate, amountToSave: amountToSave},
        method: 'POST',
        url: '/trip'
      }).success(function(res){
        console.log("res from trip post", res);
        return $http({
          method: 'PUT',
          url: '/user',
          data: {trips: res._id}
        }).success(function(res){
          console.log("This is from user put", res);
        });
      });
    };

    this.makeDeposit = function(deposit, id) {
      return $http({
        data: deposit,
        method: 'POST',
        url: '/trip/' + id
      }).then(function(res){
        return res.data;
      });
    };

  });
