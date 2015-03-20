'use strict';

describe('Directive: logoFade', function () {

  // load the directive's module
  beforeEach(module('gmicnycApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<img logo-fade></img>');
    element = $compile(element)(scope);
  }));
});
