'use strict';
angular.module('myApp').controller(
		'AppController',
		[
				"$scope",
				"httpService",
				"$state",
				"$window",
				function($scope, httpService, $state, $window) {

					/* To Validate the User */
					$scope.validateuser = function() {
						console.log("Validating User");
						var uname = $scope.username;
						var pass = $scope.password;
						var formdata = {
							username : uname,
							password : pass

						};
						var details = {

							getUrl : "rest/isvalid",
							getFormData : formdata

						};

						httpService.getDataByForm(details).then(
								onSuccessRetrival, onError);
					};

					var onSuccessRetrival = function(data) {

						$window.localStorage.setItem("uname", data.username);
						$scope.logged=data.username;
						//console.log($scope.logged);

						$state.go('home');
						// $scope.getArticleDetails();

					};

					var onError = function(reason) {
						alert("Invalid Login");
					};

					/* To display Logged in User */
					$scope.$watch('logged', function(newValue, oldValue) {
						$scope.logged = $window.localStorage.getItem("uname");
						//console.log($scope.logged + "**");

					});
				} ]);
