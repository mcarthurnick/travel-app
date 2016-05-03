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
    //
    this.createTrip = function(destination, arrivalDate, departDate, baseAirport, amountToSave, savedTotal){
      return $http({
        data:{
          destination: destination,
          arrivalDate: arrivalDate,
          departDate: departDate,
          baseAirport: baseAirport,
          amountToSave: amountToSave,
          savedTotal: savedTotal
        },
        method: 'POST',
        url: '/trips'
      }).success(function(res){
        console.log(res.data, 'this is your creatTrip res.data');
        return $http({
          method: 'PUT',
          url: '/user',
          data: {trips: res._id}
        }).success(function(res){
          console.log("this is from user put", res);
        });
      });
    };
  });
