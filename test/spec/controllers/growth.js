'use strict';

describe('Controller: GrowthCtrl', function () {

  // load the controller's module
  beforeEach(module('cssocietyApp'));

  var GrowthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrowthCtrl = $controller('GrowthCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
