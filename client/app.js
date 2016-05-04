angular.module('travapp', ['ui.router','ngMaterial', 'ui.bootstrap'])


.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('dashboard');

    $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashTemplate.html'
    })

    .state('trip', {
      url: '/trip',
      templateUrl: 'views/dashboardView.html',
      controller: 'moneyCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
    })

    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
    })

    .state('new-trip', {
      url: '/create-trip',
      templateUrl: 'views/new-trip.html',
      controller: 'tripCtrl'
    });

    // .state('trip-detail', {
    //   url: '/trip/:id',
    //   templateUrl: 'views/dashboardView.html',
    //   resolve: {
    //           tripDetail: function(tripService, $stateParams) {
    //               return tripService.getTripDetail($stateParams)
    //               .then(function(response) {
    //                   return response.data;
    //                 });
    //               }
    //             }
    // });



});
