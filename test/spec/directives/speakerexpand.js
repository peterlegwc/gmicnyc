'use strict';

describe('Directive: speakerExpand', function () {

  // load the directive's module
  beforeEach(module('gmicnycApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div speaker-expand></div>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the speakerExpand directive');
  }));
});
