angular.module('travapp').controller('tripCtrl', function($scope, tripService, $mdDialog, $mdMedia, $timeout, $q, $log, $interval, moment, $state){

  tripService.getTrips().then(function(res) {
      $scope.trips = res;
    });

    $scope.showTrip = function(){
      console.log('Trips: ' + $scope.trips);
    }

    $scope.createTrip = function(destination, arrivalDate, departDate, amountToSave){
      tripService.createTrip(destination, arrivalDate, departDate, amountToSave)
      .then(function(){
      });
    };

    $scope.getPercentage = function(res){
      $scope.amountSavedTotal = parseInt($scope.trip.amountSavedTotal);
      $scope.amountToSave = parseInt($scope.trip.amountToSave);
      $scope.percentOfGoal = Math.round($scope.amountSavedTotal / $scope.amountToSave * 100);

          return $scope.percentOfGoal;
    };

    $scope.getTripDetail = function(id) {
    tripService.getTripDetail(id)
    .then(function(response){
      $scope.trip = response.data;
      $scope.trip.amountSavedTotal = response.data.amountSavedTotal;
      $scope.trip.amountToSave = response.data.amountToSave;
      $scope.deposits = response.data.deposits;
      console.log($scope.trip, "ScopeTrip");
    });
  };




  $scope.showDialog = function(ev){
    $mdDialog.show({
      templateUrl: './../views/new-trip.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    }).then(function(ev){
      $scope.hide = function() {
        $mdDialog.hide();
      };
    });
  };
  function DialogController($scope, $mdDialog) {

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
};

  $scope.makeDeposit = function(deposit, id){
    tripService.makeDeposit(deposit, id)
    .then(function(response){
      $scope.deposits = response.deposits;
        $scope.getTripDetail(id);
    });
  };


});
