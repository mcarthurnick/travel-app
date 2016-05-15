angular.module('travapp', ['ui.router','ngMaterial', 'ui.bootstrap', 'angularMoment'])


.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('trip');

    $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashTemplate.html',
      controller: 'tripCtrl'
    })

    .state('trip', {
      url: '/trip',
      templateUrl: 'views/dashboardView.html'
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
    })



});
