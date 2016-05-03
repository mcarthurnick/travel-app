angular.module('travapp').controller('modalInstanceCtrl', function ($scope, $uibtripModal) {


  $scope.cancel = function () {
    $uibtripModal.dismiss('cancel');
  };
});
