'use strict';

/**
 * @ngdoc filter
 * @name gmicnycApp.filter:dateString
 * @function
 * @description
 * # dateString
 * Filter in the gmicnycApp.
 */
angular.module('gmicnycApp')
  .filter('dateString', function () {
    return function (input, reverse) {
      var filtered = [];
      angular.forEach(input, function(session) {
        filtered.push(session);
      });
      filtered.sort(function(a,b) {
        var aTime = a.startTime.split(/[- :]/);
        var bTime = b.startTime.split(/[- :]/);
        var dateA = new Date(aTime[0], aTime[1]-1, aTime[2], aTime[3] || 0, aTime[4] || 0, aTime[5] || 0);
        var dateB = new Date(bTime[0], bTime[1]-1, bTime[2], bTime[3] || 0, bTime[4] || 0, bTime[5] || 0);
        return dateA > dateB;
      });
      if (reverse) {
        filtered.reverse();
      }
      return filtered;
    };
  });
