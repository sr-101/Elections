'use strict';
angular.module('myApp').controller('HomeController',["$scope", "httpService", "$state", "$window",
	
	function($scope, httpService, $state, $window) {
		
		$scope.candidates=[{name:"Donald Trump"},{name:"Hillary Clinton"},{name:"Bernie Sanders"},{name:"Jeb Bush"}];
		
		$scope.dataSourceline1={};
		$scope.dataSourcepie1={};
		$scope.dataSourcepie2={};
		
		$scope.lineattr1={
				"caption": "Total Number of Media Mentions",
                "subCaption": "January 2015 - November 2016",
                "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
                "showValues": "0",
                "showBorder": "0",
                "showShadow": "0",
                "bgColor": "#ffffff",
				"paletteColors": "008ee4,1aaf5d,ff0000,000000",
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
		
		$scope.pieattr1={
	            "caption": "Total Number of Web Mentions",
	            "subCaption": "January 2015 - November 2016",
	            "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
	            "paletteColors": "#3232ff,#FF3232,#0000cc,#cc0000",
	            "bgColor": "#ffffff",
	            "showBorder": "0",
	            "use3DLighting": "0",
	            "showShadow": "0",
	            "enableSmartLabels": "1",
	            "startingAngle": "0",
	            "showPercentValues": "1",
	            "showPercentInTooltip": "0",
	            "decimals": "1",
	            "captionFontSize": "14",
	            "subcaptionFontSize": "14",
	            "subcaptionFontBold": "0",
	            "toolTipColor": "#ffffff",
	            "toolTipBorderThickness": "0",
	            "toolTipBgColor": "#000000",
	            "toolTipBgAlpha": "80",
	            "toolTipBorderRadius": "2",
	            "toolTipPadding": "5",
	            "showHoverEffect":"1",
	            "showLegend": "1",
	            "legendBgColor": "#ffffff",
	            "legendBorderAlpha": '0',
	            "legendShadow": '0',
	            "legendItemFontSize": '14',
	            "legendItemFontColor": '#666666',
	            "labelFontSize": '12',
	            "pieRadius": '100',
	            "chartLeftMargin": '0',
	            "chartRightMargin": '0',
	         
	            
		}
		
		$scope.pieattr2={
	            "caption": "Total Number of TV Mentions",
	            "subCaption": "January 2015 - November 2016",
	            "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
	            "paletteColors": "#3232ff,#FF3232,#0000cc,#cc0000",
	            "bgColor": "#ffffff",
	            "showBorder": "0",
	            "use3DLighting": "0",
	            "showShadow": "0",
	            "enableSmartLabels": "1",
	            "startingAngle": "0",
	            "showPercentValues": "1",
	            "showPercentInTooltip": "0",
	            "decimals": "1",
	            "captionFontSize": "14",
	            "subcaptionFontSize": "14",
	            "subcaptionFontBold": "0",
	            "toolTipColor": "#ffffff",
	            "toolTipBorderThickness": "0",
	            "toolTipBgColor": "#000000",
	            "toolTipBgAlpha": "80",
	            "toolTipBorderRadius": "2",
	            "toolTipPadding": "5",
	            "showHoverEffect":"1",
	            "showLegend": "1",
	            "legendBgColor": "#ffffff",
	            "legendBorderAlpha": '0',
	            "legendShadow": '0',
	            "legendItemFontSize": '14',
	            "legendItemFontColor": '#666666',
	            "labelFontSize": '12',	
	            "pieRadius": '100',
		        "chartLeftMargin": '0',
		        "chartRightMargin": '0'	
		}
	
		/*All candidate media mentions per day*/
		
		$scope.allcandidatemediamentionsperday = function() {
			var details = {
				getUrl : "rest/allmediamentionsperday",
				getFormData : $scope.candidates[0].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					linesuccess1, onError);
		};
	
		var linesuccess1 = function(data) {
			$scope.arr=data;
			$scope.linedataset1=[];
			$scope.categories=[{category: [] }];
			$scope.candidate1={seriesName:"Donald Trump",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.categories[0].category.push({label:element.date});
				$scope.candidate1.data.push({value:element.mentions});
			});
			
			$scope.linedataset1.push($scope.candidate1);
			
			$scope.dataSourceline1={
				//chart attributes
				chart: $scope.lineattr1,
				//how you set the dataset for each chart
	            dataset: $scope.linedataset1,
	            categories: $scope.categories
			}
			
			$scope.allcandidatemediamentionsperday2();
		};
		
		$scope.allcandidatemediamentionsperday2 = function() {
			var details = {
				getUrl : "rest/allmediamentionsperday",
				getFormData : $scope.candidates[1].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					linesuccess2, onError);
		};
		
		var linesuccess2 = function(data) {
			$scope.arr=data;
			$scope.candidate2={seriesName:"Hillary Clinton",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate2.data.push({value:element.mentions});
			});
			
			$scope.linedataset1.push($scope.candidate2);
			
			$scope.allcandidatemediamentionsperday3();
		};
		
		$scope.allcandidatemediamentionsperday3 = function() {
			var details = {
				getUrl : "rest/allmediamentionsperday",
				getFormData : $scope.candidates[2].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					linesuccess3, onError);
		};
		
		var linesuccess3 = function(data) {
			$scope.arr=data;
			$scope.candidate3={seriesName:"Bernie Sanders",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate3.data.push({value:element.mentions});
			});
			
			$scope.linedataset1.push($scope.candidate3);
			
			$scope.allcandidatemediamentionsperday4();
		};
		
		$scope.allcandidatemediamentionsperday4 = function() {
			var details = {
				getUrl : "rest/allmediamentionsperday",
				getFormData : $scope.candidates[3].name
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getDataByForm(details).then(
					linesuccess4, onError);
		};
		
		var linesuccess4 = function(data) {
			$scope.arr=data;
			$scope.candidate4={seriesName:"Jeb Bush",data:[]};
			
			$scope.arr.forEach(function(element){
				$scope.candidate4.data.push({value:element.mentions});
			});
			
			$scope.linedataset1.push($scope.candidate4);
		};
		
		$scope.totalweballcandpie = function() {
			var details = {
				getUrl : "rest/allcandidatewebmentions"
			};
			//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
			httpService.getData(details).then(
					piesuccess1, onError);
		};
	
		var piesuccess1 = function(data) {
			$scope.webarr=data;
			
			$scope.piedataset1=[];
			console.log($scope.webarr);
			$scope.webarr.forEach(function(element){
				$scope.piedataset1.push({label:element.candidate,value:element.mentions});
			})
			
			$scope.dataSourcepie1={
				//chart attributes
				chart: $scope.pieattr1,
				//how you set the dataset for each chart
	            data: $scope.piedataset1
			}
			
			console.log($scope.piedataset1);
			console.log($scope.dataSourcepie1);
		};
		
		$scope.totaltvallcandpie = function() {
			//console.log("Searching...");
			//console.log($scope.selectedtvCandidate.name);
			var details = {
				getUrl : "rest/allcandidatetvmentions",
			};
	
			httpService.getData(details).then(
					piesuccess2, onError);
		};
	
		var piesuccess2 = function(data) {
			$scope.webarr2=data;
			
			$scope.piedataset2=[];
			console.log($scope.webarr2);
			$scope.webarr2.forEach(function(element){
				$scope.piedataset2.push({label:element.candidate,value:element.mentions});
			})
			$scope.dataSourcepie2={
				//chart attributes
				chart: $scope.pieattr2,
				//how you set the dataset for each chart
	            data: $scope.piedataset2
			}
			console.log($scope.piedataset2);
			console.log($scope.dataSourcepie2);
		};
	
		var onError = function(reason) {
			alert("Invalid Candidate");
		};
		
}]);
