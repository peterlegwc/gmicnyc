'use strict';

describe('Controller: SpeakersCtrl', function () {

  // load the controller's module
  beforeEach(module('gmicnycApp'));

  var SpeakersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeakersCtrl = $controller('SpeakersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of speakers to the scope', function () {
    // expect(scope.speakers.length > 0).toBe(true);
    expect(scope.currentSpeaker).toBe(-1);
    scope.speaker = {'SpeakerId':2};
    scope.setDialog();
    expect(scope.currentSpeaker).toBe(2);
  });
});
