'use strict';

describe('Filter: dateString', function () {

  // load the filter's module
  beforeEach(module('gmicnycApp'));

  // initialize a new instance of the filter before each test
  var dateString;
  beforeEach(inject(function ($filter) {
    dateString = $filter('dateString');
  }));

  it('should return the input prefixed with "dateString filter:"', function () {
    var input = [
      {
        'title': 'Earlier',
        'startTime': '2015-01-01 00:00:00'
      }, {
        'title': 'Later',
        'startTime': '2015-01-01 01:00:00'
      }
    ];
    expect(dateString(input)[0].title).toBe('Earlier');
    expect(dateString(input)[1].title).toBe('Later');
    expect(dateString(input,true)[0].title).toBe('Later');
    expect(dateString(input,true)[1].title).toBe('Earlier');
  });

});
