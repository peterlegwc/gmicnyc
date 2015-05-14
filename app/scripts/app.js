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
    'ngResource',
    'leaflet-directive',
    'ngAnimate',
    'ngSanitize',
    'ngDreamFactory'
  ])
  .constant('DSP_URL', 'https://dsp-gmic.cloud.dreamfactory.com')
  .constant('DSP_API_KEY', 'gmicnyc')
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
        templateUrl: 'views/topics.html',
        controller: 'TopicsCtrl'
      })
      .when('/agenda', {
        title: 'Agenda',
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .when('/competition', {
        title: 'Competition',
        templateUrl: 'views/competition.html'
      })
      .when('/newsletter', {
        title: 'Newsletter',
        templateUrl: 'views/newsletter.html'
      })
      .when('/passes-prices', {
        title: 'Passes and Prices',
        templateUrl: 'views/passes-prices.html'
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
