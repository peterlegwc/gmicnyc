'use strict';

/**
 * @ngdoc directive
 * @name gmicnycApp.directive:logoFade
 * @description
 * # logoFade
 */
angular.module('gmicnycApp')
  .directive('logoFade', ['$window', function ($window) {
    return {
      restrict: 'A',
      scope: {
        page: '='
      },
      link: function (scope, element) {

        // handle large logo and navbar logo
        function logoHandler() {
          /* jshint validthis:true */
          if (this.pageYOffset >= 100) {
            element.removeClass('translucent');
          }
          else {
            element.addClass('translucent');
          }
          scope.$apply();
        }
        scope.$watch('page', function(page){
          if(page === 'Home'){
            element.addClass('translucent');
            angular.element($window).bind('scroll',logoHandler);
          }
          else {
            element.removeClass('translucent');
            angular.element($window).unbind('scroll', logoHandler);
          }
        });
      }
    };
  }]);
