'use strict';

describe('Controller: AgendaCtrl', function () {

  // load the controller's module
  beforeEach(module('gmicnycApp'));

  var ScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleCtrl = $controller('AgendaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
