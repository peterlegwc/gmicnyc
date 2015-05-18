'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:AgendaCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('AgendaCtrl', ['$scope','$rootScope','$timeout','DreamFactory',function ($scope,$rootScope,$timeout,DreamFactory) {
    var req = {
      table_name: 'NycSessions',
      related: 'Speakers_by_NycSessionSpeakers,Speakers_by_NycSessionModerators,NycTopics_by_TopicId'
    };

    $scope.loaded = false;
    $scope.agenda = [];

    $scope.$on('api:ready', function() {
      $rootScope.apiReady = true;
      $scope.$broadcast('getAgenda');
    });

    var getAgenda = function() {
      DreamFactory.api.db.getRecords(req,
        function(data) {
          $scope.loaded = true;
          $scope.agenda = data.record;
        },
        function(error) {
          console.log(error);
          $timeout(getAgenda, 2000);
        }
      );
    };

    $scope.$on('getAgenda', function() {
      getAgenda();
    });

    if (!$scope.loaded && $rootScope.apiReady) {
      getAgenda();
    }

    $scope.parseDate = function(mySqlDate) {
      var d = mySqlDate.split(/[- :]/);
      return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
    };
    $scope.orderByDate = function (item) {
      return $scope.parseDate(item.StartTime);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
  }]);
