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
    'ngSanitize',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })


  //.constant('appSettings', {
  //  db: 'http://chilly.iriscouch.com/datascrap'
  //});
  //.controller('mainCtrl',  ['$scope','$http', function($scope, $http, appSettings) {    
  //   $http.get('http://chilly.iriscouch.com/datascrap/cc80dee7fe9c15592b0bc33558000a6e')
  //   .success(function (data) {
  //         $scope.items = data;
  //   })
  //   .error{$scope.items = 'bummer'};
  //   console.log('this is ti' + $scope.items);
  //}]);





  .constant('appSettings', {
    //db: 'scripts/reports/'
    dblive: 'https://chilly.iriscouch.com/fauxwood50mm/_design/filtered/_view/filtered'
    //http://127.0.0.1:5984/hipster/_design/instock/_view/instock
  })
  .controller('mainCtrl',  ['appSettings', '$http', '$scope', function(appSettings, $http, $scope) {    
  // console.log(appSettings);
 //$http.get(appSettings.db + 'report' + '-15-07-2015' + '.json')
 // .success(function (data) {
 // $scope.test = data;
 //    console.log($scope.test);
 //});

  $http.get(appSettings.dblive)
   .success(function (data) {
   $scope.test = data.rows;
      //console.log($scope.test);
  });







//var myRedObjects = $filter('filter')(myObjects, { color: "red" });

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
     [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];



  }]);



