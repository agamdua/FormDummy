'use strict';

describe('Controller: ListPeopleCtrl', function () {

  // load the controller's module
  beforeEach(module('formDummyApp'));

  var ListpeoplectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListpeoplectrlCtrl = $controller('ListPeopleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
