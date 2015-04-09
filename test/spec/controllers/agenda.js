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
    expect(scope.agenda.length > 0).toBe(true);
    var date = new Date(2015,0,1,0,0,0);
    expect(scope.parseDate('2015-01-01 00:00:00').toDateString()).toBe(date.toDateString());
  });
});
