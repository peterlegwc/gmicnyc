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
    'leaflet-directive',
    'ngAnimate'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/sponsors', {
        title: 'Sponsorship',
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl'
      })
      .when('/topics', {
        title: 'Topics',
        templateUrl: 'views/topics.html'
      })
      .when('/schedule', {
        title: 'Schedule',
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .when('/gstartup', {
        templateUrl: 'views/gstartup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }).run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    $rootScope.title = 'GMIC New York';
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $window.ga('send', 'pageview', { page: $location.url() });
      if (current.hasOwnProperty('$$route')) {
        $rootScope.title = current.$$route.title;
      }
    });
  }]);
