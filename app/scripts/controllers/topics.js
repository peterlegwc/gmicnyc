'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('TopicsCtrl', ['$scope','$rootScope','$timeout','DreamFactory', function ($scope,$rootScope,$timeout,DreamFactory) {
    var req = {table_name: 'NycTopics'};
    $scope.loaded = false;
    $scope.topics = {};
    $scope.$on('api:ready', function() {
      $rootScope.apiReady = true;
      $scope.$broadcast('getTopics');
    });
    var getTopics = function() {
      DreamFactory.api.db.getRecords(req,
        function(data) {
          $scope.loaded = true;
          $scope.topics = data.record;
        },
        function(error) {
          console.log(error);
          $timeout(getTopics, 2000);
        }
      );
    };

    $scope.$on('getTopics', function() {
      getTopics();
    });

    if (!$scope.loaded && $rootScope.apiReady) {
      getTopics();
    }
  }]);
