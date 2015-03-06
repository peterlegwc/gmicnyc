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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
