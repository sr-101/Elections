'use strict';
angular.module('myApp').controller('TVTrendsController',["$scope", "httpService", "$state", "$window",
	
	function($scope, httpService, $state, $window) {
		
		$scope.candidates=[{name:"Donald Trump"},{name:"Hillary Clinton"},{name:"Bernie Sanders"},{name:"Jeb Bush"}];
		
		$scope.networks=[{name:"Aljazeera America",index: 0},{name:"Bloomberg", index: 1},{name:"CNBC",index: 2},{name:"CNN",index: 3},{name:"Comedy Central",index: 4},{name:"FOX Business", index: 5 },{name:"FOX News", index: 6},{name:"LinkTV",index: 7},{name:"MSNBC",index: 8}];
	//	$scope.networksvalue=[{name:"0"},{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"},{name:"8"}];
		
		$scope.selectedTVNetwork1={};
		$scope.selectedTVNetwork2={};

		$scope.dataSourceSelectedPie1={};
		$scope.dataSourceSelectedPie2={};
		$scope.dataSource10={};
		
	
		//Selected pie chart from dropdown
		$scope.selectedTVNetwork1.index=0;
		$scope.selectedTVNetwork1.name=$scope.networks[$scope.selectedTVNetwork1.index].name;
		
		$scope.getPieForNetwork1 = function() {
			
			var details = {
				getUrl : "rest/allcandidatetvmentionspernetwork",
				getFormData : $scope.selectedTVNetwork1.index+""
			};
	
			httpService.getDataByForm(details).then(
					selectedPieSuccess1, onError);
		};
	
		var selectedPieSuccess1 = function(data) {
			$scope.arr=data;
			
			$scope.dataset1=[];
			//console.log($scope.arr);
			$scope.arr.forEach(function(element){
				$scope.dataset1.push({label:element.candidate,value:element.mentions});
			})
			$scope.pieattr1.caption=$scope.networks[$scope.selectedTVNetwork1.index].name
			$scope.dataSourceSelectedPie1={
				chart:$scope.pieattr1,
				data: $scope.dataset1
			}
			//console.log($scope.dataSourceselectedpie);
		};
		
		//Selected pie chart from dropdown
		$scope.selectedTVNetwork2.index=1;
		$scope.selectedTVNetwork2.name=$scope.networks[1].name;
		
		$scope.getPieForNetwork2 = function() {
			
			var details = {
				getUrl : "rest/allcandidatetvmentionspernetwork",
				getFormData : $scope.selectedTVNetwork2.index+""
			};
	
			httpService.getDataByForm(details).then(
					selectedPieSuccess2, onError);
		};
	
		var selectedPieSuccess2 = function(data) {
			$scope.arr=data;
			
			$scope.dataset2=[];
			//console.log($scope.arr);
			$scope.arr.forEach(function(element){
				$scope.dataset2.push({label:element.candidate,value:element.mentions});
			})
			$scope.pieattr2.caption=$scope.networks[$scope.selectedTVNetwork2.index].name
			$scope.dataSourceSelectedPie2={
				chart:$scope.pieattr2,
				data: $scope.dataset2
			}
			//console.log($scope.dataSourceselectedpie);
		};		
	
		$scope.pieattr1={
	            "caption": $scope.networks[$scope.selectedTVNetwork1.index].name,
	            "subCaption": "January 2015 - November 2016",
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
	         
	            
		};
		
		$scope.pieattr2={
	            "caption":  $scope.networks[$scope.selectedTVNetwork2.index].name,
	            "subCaption": "January 2015 - November 2016",
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
		};
		
		
		$scope.avgattr1={
				"caption": "Average Number of TV Mentions per Month",
                "subCaption": "January 2015 - November 2016",
                "xAxisName": "Date",
                "yAxisName": "Number of Mentions",
                "xAxisNameFontSize": "12",
		        "yAxisNameFontSize": "12",
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
		};
		
		
		/* Average mentions monthly */
		
		
		$scope.dataSourceavg1={};
		
		$scope.allcandidateaveragementionsmonthly = function() {
			var details = {
				getUrl : "rest/averagetvmentionspermonth",
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
				getUrl : "rest/averagetvmentionspermonth",
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
				getUrl : "rest/averagetvmentionspermonth",
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
				getUrl : "rest/averagetvmentionspermonth",
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
		$scope.selectedtvCandidate={};
		$scope.selectedCandidate={};
		
		$scope.gettop10datestv = function() {
			//console.log("Searching...");
			//console.log($scope.selectedwebCandidate.name);
			var details = {
				getUrl : "rest/top10datestv",
				getFormData : $scope.selectedtvCandidate.name
			};
	
			httpService.getDataByForm(details).then(
					onSuccessRetrivaltv, onError);
		};
	
		var onSuccessRetrivaltv = function(data) {
			$scope.tvarr=data;
			if($scope.selectedtvCandidate!=null){
				$scope.selectedCandidate=$scope.selectedtvCandidate;
			}
			$scope.dataset10=[];
			
			$scope.tvarr.forEach(function(element){
				$scope.dataset10.push({label:element.date,value:element.mentions});
			});
			$scope.dataSource10={
				"chart": {
			        "caption": "Top 10 Days with Most Mentions for "+$scope.selectedCandidate.name,
			        "xAxisName": "Date",
			        "yAxisName": "Number of Mentions",
			        "xAxisNameFontSize": "12",
			        "yAxisNameFontSize": "12",
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
				data: $scope.dataset10
			}
			console.log($scope.dataSource10);
		};
		
		
		/*
		 * First linked chart
		 * 
		 * 
		 */
		$scope.colattrs1={
		        "caption": "Comparison of Mentions By Candidate",
		        "xAxisname": "Months",
		        "yAxisName": "Mentions",
		        "xAxisNameFontSize": "12",
		        "yAxisNameFontSize": "12",
		        "plotFillAlpha": "80",
		        "paletteColors": "#FF3232,#3232ff,#0000cc,#cc0000",
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
		        "divLineIsDashed": "1",
		        "divLineDashLen": "1",
		        "divLineGapLen": "1",
		        "usePlotGradientColor": "0",
		        "showplotborder": "0",
		        "valueFontColor": "#ffffff",
		        "placeValuesInside": "1",
		        "showHoverEffect": "1",
		        "rotateValues": "1",
		        "showXAxisLine": "1",
		        "xAxisLineThickness": "1",
		        "xAxisLineColor": "#999999",
		        "showAlternateHGridColor": "0",
		        "legendBgAlpha": "0",
		        "legendBorderAlpha": "0",
		        "legendShadow": "0",
		        "legendItemFontSize": "14",
		        "legendItemFontColor": "#666666"
		    };
			
			$scope.getColsForNetworks = function() {
				var details = {
					getUrl : "rest/candidatetvmentionspernetworkpermonthperyearjson",
				};
				//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
				httpService.getData(details).then(
						colsuccess, onError);
			};
		
			var colsuccess = function(data) {
				$scope.linked=data;
			}
			
			$scope.getColsForNetworks1 = function() {
				var details = {
					getUrl : "rest/candidatetvmentionspermonthperyear",
					getFormData : $scope.candidates[0].name
				};
				//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
				httpService.getDataByForm(details).then(
						colsuccess1, onError);
			};
		
			var colsuccess1 = function(data) {
				$scope.arr=data;
				$scope.coldataset1=[];
				$scope.categories=[{category: [] }];
				$scope.candidate1={seriesName:"Donald Trump",data:[]};
				
				$scope.arr.forEach(function(element){
					$scope.categories[0].category.push({label:element.date});
					$scope.candidate1.data.push({value:element.mentions,link:"newchart-json-"+element.date+""+element.candidate});
				});
				
				$scope.coldataset1.push($scope.candidate1);
				
				
				
				$scope.getColsforNetworks2();
			};
			   
			$scope.getColsforNetworks2 = function() {
				var details = {
					getUrl : "rest/candidatetvmentionspermonthperyear",
					getFormData : $scope.candidates[1].name
				};
				//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
				httpService.getDataByForm(details).then(
						colsuccess2, onError);
			};
			
			var colsuccess2 = function(data) {
				$scope.arr=data;
				$scope.candidate2={seriesName:"Hillary Clinton",data:[]};
				
				$scope.arr.forEach(function(element){
					$scope.candidate2.data.push({value:element.mentions,link:"newchart-json-"+element.date+""+element.candidate});
				});
				
				$scope.coldataset1.push($scope.candidate2);
				
				$scope.getColsforNetworks3();
			};
			
			$scope.getColsforNetworks3 = function() {
				var details = {
					getUrl : "rest/candidatetvmentionspermonthperyear",
					getFormData : $scope.candidates[2].name
				};
				//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
				httpService.getDataByForm(details).then(
						colsuccess3, onError);
			};
			
			var colsuccess3 = function(data) {
				$scope.arr=data;
				$scope.candidate3={seriesName:"Bernie Sanders",data:[]};
				
				$scope.arr.forEach(function(element){
					$scope.candidate3.data.push({value:element.mentions,link:"newchart-json-"+element.date+""+element.candidate});
				});
				
				$scope.coldataset1.push($scope.candidate3);
				
				$scope.getColsforNetworks4();
			};
			
			$scope.getColsforNetworks4 = function() {
				var details = {
					getUrl : "rest/candidatetvmentionspermonthperyear",
					getFormData : $scope.candidates[3].name
				};
				//when you only want one candidate need to add getFormData : $scope. (variablename) and getDataByForm 
				httpService.getDataByForm(details).then(
						colsuccess4, onError);
			};
			
			var colsuccess4 = function(data) {
				$scope.arr=data;
				$scope.candidate4={seriesName:"Jeb Bush",data:[]};
				
				$scope.arr.forEach(function(element){
					$scope.candidate4.data.push({value:element.mentions,link:"newchart-json-"+element.date+""+element.candidate});
				});
				
				$scope.coldataset1.push($scope.candidate4);
				
				
				$scope.data=[];
				$scope.categories[0].category.forEach(function(element){
					$scope.data.push({label:element.label});
				})
				/*console.log("Linked");
				console.log($scope.linked.linkeddata);
				console.log("Data");
				console.log($scope.data);*/
				$scope.linkedobj={};
				
				FusionCharts.ready(function(){
				    var fusioncharts = new FusionCharts({
				    type: 'mscolumn2d',
				    renderAt: 'chart-container',
				    width: "100%",
				    height: 500,
				    dataSource: {
				        "chart": $scope.colattrs1,
				        "dataset": $scope.coldataset1,
				        "categories": $scope.categories,
				        "linkeddata": $scope.linked
				    },
				    events:{
			            'dataPlotClick': function(eventObj,dataObj){
			            	/*console.log("Clicked");
			            	console.log(dataObj)
			            	console.log(dataObj.datasetName+" "+dataObj.categoryLabel);*/
			            	
			            	function findID(arrobj) { 
			            		//console.log(arrobj.id);
			            		var string=dataObj.categoryLabel+""+dataObj.datasetName;
			            		//console.log("String: "+string);
			            	    return arrobj.id.match(string);
			            	}

			            	//console.log($scope.linked.linkeddata.find(findID));
			            	$scope.linkedobj=$scope.linked.linkeddata.find(findID);
			            	//console.log($scope.linkedobj.linkedchart.data);
			            	$scope.linkedobj.linkedchart.data.forEach(function(obj){
			            		obj.label=$scope.networks[obj.label].name;
			            	})
			            	//console.log($scope.linkedobj.linkedchart.data);
			            	
			            	$scope.linkedobj.linkedchart.chart.subcaption="for "+dataObj.datasetName+" in "+dataObj.categoryLabel;
			            	fusioncharts.configureLink({
			            		type:'column2d',
			            		dataSource: {
							        "chart": $scope.linkedobj.linkedchart.chart,
							        "data": $scope.linkedobj.linkedchart.data
			            		}
			            	})
			            }
			        }
				}
				);
				    fusioncharts.render();		
				});
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
