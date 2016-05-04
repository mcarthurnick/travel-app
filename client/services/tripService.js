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
        data: {destination: destination, arrivalDate: arrivalDate, departDate: departDate, amountToSave: amountToSave, amountDeposited: amountDeposited},
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
    }

    this.makeDeposit = function(date, description, amountDeposited) {
      return $http({
        data: {date: date, description: description, amountDeposited: amountDeposited},
        method: 'PUT',
        url: '/trip/' + id
      }).success(function(res){})
    }
    //
    // this.createTrip = function(destination, arrivalDate, departDate, baseAirport, amountToSave, savedTotal){
    //   return $http({
    //     method: 'POST',
    //     url: '/trips',
    //     data: ,
    //   }).success(function(res){
    //     console.log(res.data, 'this is your creatTrip res.data');
    //     return $http({
    //       method: 'PUT',
    //       url: '/user',
    //       data: {trips: res._id}
    //     }).success(function(res){
    //       console.log("this is from user put", res);
    //     });
    //   });
    // };
  });
