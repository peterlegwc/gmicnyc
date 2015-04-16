'use strict';

describe('Directive: topicHighlight', function () {

  // load the directive's module
  beforeEach(module('gmicnycApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<topic-highlight></topic-highlight>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the topicHighlight directive');
  }));
});
