'use strict';

describe('Registration controller tests', function () {
	var scope;
	beforeEach(module('formDummyApp'));
	beforeEach(inject(function ( $rootScope, $controller ) {
		scope = $rootScope.$new();
		$controller('RegistrationCtrl', {
			$scope: scope
		});
	}));
	it('should have a message of hello on scope', function () {
		expect(scope.message).toBe('hello');
	});
});