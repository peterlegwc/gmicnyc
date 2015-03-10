'use strict';

/**
 * @ngdoc overview
 * @name gmicnycApp
 * @description
 * # gmicnycApp
 *
 * Main module of the application.
 */
angular
  .module('gmicnycApp', [
    'ngRoute',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/speakers', {
        title: 'Speakers',
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      if (current.hasOwnProperty('$$route')) {
        $rootScope.title = current.$$route.title;
      }
    });
  }]);
