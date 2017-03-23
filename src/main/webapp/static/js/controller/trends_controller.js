'use strict';
angular.module('myApp').controller('TrendsController',["$scope", "httpService", "$state", "$window",
	
	function($scope, httpService, $state, $window) {
		
		$scope.candidates=[{name:"Donald Trump"},{name:"Hillary Clinton"},{name:"Bernie Sanders"},{name:"Jeb Bush"}];
		
		$scope.selectedwebCandidate={};
		$scope.selectedtvCandidate={};
		$scope.selectedCandidate={};
		$scope.dataSource={};
		
		$scope.gettop10datesweb = function() {
			//console.log("Searching...");
			//console.log($scope.selectedwebCandidate.name);
			var details = {
				getUrl : "rest/top10datesweb",
				getFormData : $scope.selectedwebCandidate.name
			};
	
			httpService.getDataByForm(details).then(
					onSuccessRetrivalweb, onError);
		};
	
		var onSuccessRetrivalweb = function(data) {
			$scope.webarr=data;
			if($scope.selectedwebCandidate!=null){
				$scope.selectedCandidate=$scope.selectedwebCandidate;
			}
			$scope.dataset=[];
			console.log($scope.webarr);
			$scope.webarr.forEach(function(element){
				$scope.dataset.push({label:element.date,value:element.mentions});
			})
			$scope.dataSource={
				"chart": {
			        "caption": "Web Mentions Per Day for "+$scope.selectedCandidate.name,
			        "xAxisName": "Date",
			        "yAxisName": "No. of Mentions",
			        "lineThickness": "2",
			        "paletteColors": "#0075c2",
			        "baseFontColor": "#333333",
			        "baseFont": "Helvetica Neue,Arial",
			        "captionFontSize": "14",
			        "subcaptionFontSize": "14",
			        "subcaptionFontBold": "0",
			        "showBorder": "0",
			        "bgColor": "#ffffff",
			        "showShadow": "0",
			        "canvasBgColor": "#ffffff",
			        "canvasBorderAlpha": "0",
			        "divlineAlpha": "100",
			        "divlineColor": "#999999",
			        "divlineThickness": "1",
			        "divLineDashed": "1",
			        "divLineDashLen": "1",
			        "showXAxisLine": "1",
			        "xAxisLineThickness": "1",
			        "xAxisLineColor": "#999999",
			        "showAlternateHGridColor": "0"
			    },
				data: $scope.dataset
			}
			console.log($scope.dataSource);
		};
		
		$scope.gettop10datestv = function() {
			//console.log("Searching...");
			//console.log($scope.selectedtvCandidate.name);
			var details = {
				getUrl : "rest/top10datestv",
				getFormData : $scope.selectedtvCandidate.name
			};
	
			httpService.getDataByForm(details).then(
					onSuccessRetrivaltv, onError);
		};
	
		var onSuccessRetrivaltv = function(data) {
			$scope.tvarr=data;
		};
	
		var onError = function(reason) {
			alert("Invalid Candidate");
		};
		   
		
		/* To display Logged in User */
		$scope.$watch('logged', function(newValue, oldValue) {
			$scope.logged = $window.localStorage.getItem("uname");
			//console.log($scope.logged + "**");
		});
		
}]);
