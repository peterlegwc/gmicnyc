'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('TopicsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
