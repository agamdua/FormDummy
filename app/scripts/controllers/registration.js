'use strict';

angular.module('formDummyApp')
.controller('RegistrationCtrl', function ($scope, $http) {
	$scope.getLocation = function(val) {
		return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
			params: {
				address: val,
				sensor: false
			}
		}).then(function(res){
			var addresses = [];
			angular.forEach(res.data.results, function(item){
				addresses.push(item.formatted_address);
			});
			return addresses;
		});
	};

	$scope.userDisplay = [];

	$scope.submit = function (userProfile) {
		// return $scope.userDisplay.push(userProfile);
		$scope.userDisplay.push(angular.copy(userProfile));
	};

});