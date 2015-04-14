'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('TopicsCtrl', function ($scope,topicsFactory) {
    $scope.topics = topicsFactory.getAll();
    var ary = [];
    angular.forEach($scope.topics, function (val, key) {
      ary.push(val);
    });
    $scope.topicsArr = ary;
  });
