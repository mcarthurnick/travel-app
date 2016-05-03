angular.module('travapp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sidebarDir.html'
    };
  });
