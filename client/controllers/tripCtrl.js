angular.module('travapp').controller('tripCtrl', function($scope, tripService, $mdDialog, $mdMedia, $timeout, $q, $log, $interval){

  tripService.getTrips().then(function(res) {
    console.log("This is the result.. ", res);
      $scope.trips = res;
    });

    tripService.createTrip().then(function(res){
      console.log("This is createTrip..", res);
    });

    $scope.getPercentage = function(res){
      $scope.amountSaved = parseInt($scope.trip.amountSavedTotal);
      $scope.amountToSave = parseInt($scope.trip.amountToSave);
      $scope.percentOfGoal = Math.round($scope.amountSaved / $scope.amountToSave * 100);

          return $scope.percentOfGoal;
    };

    $scope.getTripDetail = function(id) {
    tripService.getTripDetail(id)
    .then(function(response){
      $scope.trip = response.data;
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
}

// $scope.getProgressbarValue = function() {
//     $scope.amountSaved = parseInt($scope.trip.amountSavedTotal);
//     $scope.amountToSave = parseInt($scope.trip.amountToSave);
//     $scope.percentOfGoal = Math.round($scope.amountSaved / $scope.amountToSave * 100);
//
//     return $scope.percentOfGoal;
//   };

});
