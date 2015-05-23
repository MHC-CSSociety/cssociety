'use strict';

describe('Controller: CommunityCtrl', function () {

  // load the controller's module
  beforeEach(module('cssocietyApp'));

  var CommunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommunityCtrl = $controller('CommunityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
