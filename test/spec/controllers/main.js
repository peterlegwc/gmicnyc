'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gmicnycApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach leaflet coordinates and options to the scope', function () {
    expect(Object.keys(scope.desktopCenter).length).toBe(3);
    expect(Object.keys(scope.center).length).toBe(3);
    expect(scope.defaults.scrollWheelZoom).toBe(false);
    expect(Object.keys(scope.markers).length).toBe(1);
  });
});
