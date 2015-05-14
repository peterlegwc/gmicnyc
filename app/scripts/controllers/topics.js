'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('TopicsCtrl', ['$scope','$rootScope','DreamFactory', function ($scope,$rootScope,DreamFactory) {
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
