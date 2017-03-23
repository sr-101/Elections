'use strict';
angular.module('myApp').controller('WebTrendsController',["$scope", "httpService", "$state", "$window",
	
	function($scope, httpService, $state, $window) {
		
		$scope.candidates=[{name:"Donald Trump"},{name:"Hillary Clinton"},{name:"Bernie Sanders"},{name:"Jeb Bush"}];
		
		$scope.selectedwebCandidate={};
		$scope.selectedtvCandidate={};
		$scope.selectedCandidate={};
		$scope.dataSource={};
		$scope.dataSource2={};
		$scope.dataSourcearea1={};
		
		
		$scope.areaattr1={
				"caption": "Total Number of Web Mentions per Day",
                "subCaption": "January 2015 - November 2016",
                "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
                "showValues": "0",
                "showBorder": "0",
                "showShadow": "1",
                "bgColor": "#ffffff",
				"paletteColors": "ff1a1a,251aff,a39eff,ff9e9e",
                "borderAlpha": "20",
                "showCanvasBorder": "0",
                "showAxisLines": "0",
				"usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "plotFillAlpha": "50",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "showValues": "0",
                "showBorder": "0",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
				"divlineAlpha": "100",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "lineThickness": "3",
                "flatScrollBars": "1",
                "scrollheight": "10",
                "numVisiblePlot": "12",
                "showHoverEffect": "1",
                "transposeAxis":"1"
		}
		
		$scope.avgattr1={
				"caption": "Average Number of Web Mentions per Month",
                "subCaption": "January 2015 - November 2016",
                "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
                "showValues": "0",
                "showBorder": "0",
                "showShadow": "1",
                "bgColor": "#ffffff",
				"paletteColors": "ff1a1a,251aff,a39eff,ff9e9e",
                "borderAlpha": "20",
                "showCanvasBorder": "0",
                "showAxisLines": "0",
				"usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "plotFillAlpha": "50",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "showValues": "0",
                "showBorder": "0",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
				"divlineAlpha": "100",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "lineThickness": "3",
                "flatScrollBars": "1",
                "scrollheight": "10",
                "numVisiblePlot": "12",
                "showHoverEffect": "1",
                "transposeAxis":"1"
		}
		
		
		/*Web mentions per day for each candidate separately*/
		
		$scope.allcandidatewebmentionsperday = function() {
			var details = {
				getUrl : "rest/allwebmentionsperday",
				getFormData : $scope.candidates[0].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					areasuccess1, onError);
		};
	
		var areasuccess1 = function(data) {
			$scope.arr=data;
			$scope.areadataset1=[];
			$scope.categories=[{category: [] }];
			$scope.candidate1={seriesName:"Donald Trump",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.categories[0].category.push({label:element.date});
				$scope.candidate1.data.push({value:element.mentions});
			});
			
			$scope.areadataset1.push($scope.candidate1);
			
			$scope.dataSourcearea1={
				//chart attributes
				chart: $scope.areaattr1,
				//how you set the dataset for each chart
	            dataset: $scope.areadataset1,
	            categories: $scope.categories
			}
			
			$scope.allcandidatewebmentionsperday2();
		};
		
		$scope.allcandidatewebmentionsperday2 = function() {
			var details = {
				getUrl : "rest/allwebmentionsperday",
				getFormData : $scope.candidates[1].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					areasuccess2, onError);
		};
		
		var areasuccess2 = function(data) {
			$scope.arr=data;
			$scope.candidate2={seriesName:"Hillary Clinton",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate2.data.push({value:element.mentions});
			});
			
			$scope.areadataset1.push($scope.candidate2);
			
			$scope.allcandidatewebmentionsperday3();
		};
		
		$scope.allcandidatewebmentionsperday3 = function() {
			var details = {
				getUrl : "rest/allwebmentionsperday",
				getFormData : $scope.candidates[2].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					areasuccess3, onError);
		};
		
		var areasuccess3 = function(data) {
			$scope.arr=data;
			$scope.candidate3={seriesName:"Bernie Sanders",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate3.data.push({value:element.mentions});
			});
			
			$scope.areadataset1.push($scope.candidate3);
			
			$scope.allcandidatewebmentionsperday4();
		};
		
		$scope.allcandidatewebmentionsperday4 = function() {
			var details = {
				getUrl : "rest/allwebmentionsperday",
				getFormData : $scope.candidates[3].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					areasuccess4, onError);
		};
		
		var areasuccess4 = function(data) {
			$scope.arr=data;
			$scope.candidate4={seriesName:"Jeb Bush",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate4.data.push({value:element.mentions});
			});
			
			$scope.areadataset1.push($scope.candidate4);
		};
		
		
		/* Monthly average per candidate */
		
		$scope.dataSourceavg1={};
		
		$scope.allcandidateaveragementionsmonthly = function() {
			var details = {
				getUrl : "rest/averagewebmentionspermonth",
				getFormData : $scope.candidates[0].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					avgsuccess1, onError);
		};
	
		var avgsuccess1 = function(data) {
			$scope.arr=data;
			$scope.avgdataset1=[];
			$scope.avgcategories=[{category: [] }];
			$scope.avgcandidate1={seriesName:"Donald Trump",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.avgcategories[0].category.push({label:element.date});
				$scope.avgcandidate1.data.push({value:element.mentions});
			});
			
			$scope.avgdataset1.push($scope.avgcandidate1);
			
			$scope.dataSourceavg1={
				//chart attributes
				chart: $scope.avgattr1,
				//how you set the dataset for each chart
	            dataset: $scope.avgdataset1,
	            categories: $scope.avgcategories
			}
			
			$scope.allcandidateaveragementionsmonthly2();
		};
		
		$scope.allcandidateaveragementionsmonthly2 = function() {
			var details = {
				getUrl : "rest/averagewebmentionspermonth",
				getFormData : $scope.candidates[1].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					avgsuccess2, onError);
		};
		
		var avgsuccess2 = function(data) {
			$scope.arr=data;
			$scope.avgcandidate2={seriesName:"Hillary Clinton",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.avgcandidate2.data.push({value:element.mentions});
			});
			
			$scope.avgdataset1.push($scope.avgcandidate2);
			
			$scope.allcandidateaveragementionsmonthly3();
		};
		
		$scope.allcandidateaveragementionsmonthly3 = function() {
			var details = {
				getUrl : "rest/averagewebmentionspermonth",
				getFormData : $scope.candidates[2].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					avgsuccess3, onError);
		};
		
		var avgsuccess3 = function(data) {
			$scope.arr=data;
			$scope.avgcandidate3={seriesName:"Bernie Sanders",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.avgcandidate3.data.push({value:element.mentions});
			});
			
			$scope.avgdataset1.push($scope.avgcandidate3);
			
			$scope.allcandidateaveragementionsmonthly4();
		};
		
		$scope.allcandidateaveragementionsmonthly4 = function() {
			var details = {
				getUrl : "rest/averagewebmentionspermonth",
				getFormData : $scope.candidates[3].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					avgsuccess4, onError);
		};
		
		var avgsuccess4 = function(data) {
			$scope.arr=data;
			$scope.avgcandidate4={seriesName:"Jeb Bush",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.avgcandidate4.data.push({value:element.mentions});
			});
			
			$scope.avgdataset1.push($scope.avgcandidate4);
			console.log($scope.dataSourceavg1);
		};
		
		
		
		/*Get top 10 dates*/
		
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
			$scope.webtop10arr=data;
			if($scope.selectedwebCandidate!=null){
				$scope.selectedCandidate=$scope.selectedwebCandidate;
			}
			$scope.dataset=[];
			console.log($scope.webarr);
			$scope.webtop10arr.forEach(function(element){
				$scope.dataset.push({label:element.date,value:element.mentions});
			})
			$scope.dataSource={
				"chart": {
			        "caption": "Top 10 Days with Most Mentions for "+$scope.selectedCandidate.name,
			        "xAxisName": "Date",
			        "yAxisName": "Number of Mentions",
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
		
		/*Total number of web mentions for each candidate*/
		
		$scope.gettotalwebmentions = function() {
			//console.log("Searching...");
			//console.log($scope.selectedwebCandidate.name);
			var details = {
				getUrl : "rest/allcandidatewebmentions",
				//getFormData : $scope.selectedwebCandidate.name
			};
	
			httpService.getData(details).then(
					onSuccessRetrivaltotalweb, onError);
		};
	
		var onSuccessRetrivaltotalweb = function(data) {
			$scope.webarr=data;
			
			$scope.dataset2=[];
			//console.log($scope.webarr);
			$scope.webarr.forEach(function(element){
				$scope.dataset2.push({label:element.candidate,value:element.mentions});
			})
			$scope.dataSource2={
				"chart": {
			        "caption": "Total Number of Web Mentions",
			        "subCaption": "January 2015 - November 2016",
			        "xAxisName": "Candidate",
			        "yAxisName": "Number of Mentions",
			        "paletteColors": "#3232ff,#FF3232,#0000cc,#cc0000",
			        "bgColor": "#ffffff",
			        "borderAlpha": "20",
			        "canvasBorderAlpha": "0",
			        "usePlotGradientColor": "0",
			        "plotBorderAlpha": "10",
			        "placevaluesInside": "1",
			        "rotatevalues": "1",
			        "valueFontColor": "#ffffff",
			        "showXAxisLine": "1",
			        "xAxisLineColor": "#999999",
			        "divlineColor": "#999999",
			        "divLineDashed": "1",
			        "showAlternateHGridColor": "0",
			        "subcaptionFontBold": "0",
			        "subcaptionFontSize": "14"
			    },
				data: $scope.dataset2
			}
			console.log($scope.dataSource2);
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
