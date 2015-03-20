'use strict';

/**
 * @ngdoc directive
 * @name gmicnycApp.directive:logoFade
 * @description
 * # logoFade
 */
angular.module('gmicnycApp')
  .directive('logoFade', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        scope.$on('$destroy', function() {
          angular.element(window).unbind('scroll', logoHandler);
          angular.element('.navbar-brand img').css('opacity','1');
        });

        // handle large logo and navbar logo
        function logoHandler(scope, element) {
          var y = angular.element(window).scrollTop();
          if (y > homeOffset) {
            angular.element('.navbar-brand img').css('opacity','1');
          }
          else {
            angular.element('.navbar-brand img').css('opacity','0');
          }
        }
        var navOffset = angular.element('.navbar').height();
        var homeOffset = element.offset().top + element.height() - navOffset;

        angular.element('.navbar-brand img').css('opacity','0');
        angular.element(window).scroll(logoHandler);
      }
    };
  });
