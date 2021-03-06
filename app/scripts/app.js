'use strict';

/**
 * @ngdoc overview
 * @name angularCompetitionPricesApp
 * @description
 * # angularCompetitionPricesApp
 *
 * Main module of the application.
 */
angular
  .module('angularCompetitionPricesApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
