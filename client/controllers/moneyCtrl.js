angular.module('travapp').controller('moneyCtrl', function($scope){

  $scope.deposits = [
    {
      date: "12/30/2015",
      description: "This is the initial deposit",
      amountDeposited: "$59.00"
    },
    {
      date: "1/05/2016",
      description: "Christmas Money",
      amountDeposited: "$100.00"
    },
    {
      date: "1/08/2016",
      description: "Yard Sale",
      amountDeposited: "$300.00"
    }
  ];

});
