'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gmicnyc
 */
angular.module('gmicnycApp')
  .controller('MainCtrl', ['$scope', 'leafletData', function ($scope, leafletData) {
    angular.extend($scope, {
        desktopCenter: {
          lat: 40.7530026,
          lng: -73.9732017,
          zoom: 14
        },
        center: {
          lat: 40.748154,
          lng: -74.008547,
          zoom: 14
        },
        defaults: {
          tileLayer: 'https://{s}.tiles.mapbox.com/v4/peterlegwc.l80heo1e/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGV0ZXJsZWd3YyIsImEiOiIxZjJCajJBIn0.BaUQLHLoFat12596nD3PLA',
          scrollWheelZoom: false
        },
        markers: {
          gmicnycMarker: {
            lat: 40.748154,
            lng: -74.008547,
            message: '<strong class="heading">Pier Sixty at Chelsea Piers</strong><br>Pier 60<br>23rd Street and West Side Highway<br>New York, NY 10011',
            focus: true,
            draggable: false
          }
        }
    });

    // offsets map on larger screens to show more of new york
    if (angular.element(window).width() > 768) {
      leafletData.getMap('map').then(function(map) {
        map.setView($scope.desktopCenter);
      });
    }
  }]);
