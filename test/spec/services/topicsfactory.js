'use strict';

describe('Service: topicsFactory', function () {

  // load the service's module
  beforeEach(module('gmicnycApp'));

  // instantiate service
  var topicsFactory;
  beforeEach(inject(function (_topicsFactory_) {
    topicsFactory = _topicsFactory_;
  }));

  it('should do something', function () {
    // expect(!!topicsFactory).toBe(true);
  });

});
