'use strict';

/**
 * @ngdoc directive
 * @name gmicnycApp.directive:topicHighlight
 * @description
 * # topicHighlight
 */
angular.module('gmicnycApp')
  .directive('topicHighlight', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/hometopics.html',
      link: function postLink(scope, element, attrs) {
        scope.$watch(function() {
          return scope.currentTopic;
        }, function(newVal, oldVal) {
          if (newVal) {
            angular.element('.topic h4').removeClass('color-primary');
            angular.element('.topic-' + newVal.topicId + ' h4').addClass('color-primary');
          }
        });
        scope.currentTopic = scope.topics[0];
      }
    };
  });
