'use strict';
angular.module('myApp').controller('WordCloudsController',["$scope", "httpService", "$state", "$window",
	
	function($scope, httpService, $state, $window) {
		
		$scope.ifimg=false;
		$scope.selectedCandidate={};
		$scope.selectedTVorWeb={};
	
		$scope.candidates=[{name:"Donald Trump"},{name:"Hillary Clinton"},{name:"Bernie Sanders"},{name:"Jeb Bush"}];	   
		
		$scope.webortv=[{name:"Web"},{name:"TV"}];
		
		$scope.dateOptions = {
			    formatYear: 'yyyy',
			    minDate: new Date('2015-1-2'),
			    maxDate: new Date('2016-11-29'),
			    startingDay: 1,
			    placement:"bottom",
			    yearRows:2,
			    yearColumns:1,
			    showWeeks:false
		};
		
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};

		$scope.popup2 = {
			opened: false
		};
		  
		$scope.date="";
		
		$scope.onCandidateChange=function(){
			if($scope.selectedDate && $scope.selectedTVorWeb.name && $scope.selectedCandidate.name){
				$scope.requestWordCloud();
			}
		}
		
		$scope.onMediumChange=function(){
			if($scope.selectedDate && $scope.selectedTVorWeb.name && $scope.selectedCandidate.name){
				$scope.requestWordCloud();
			}
		}
		
		$scope.onDateChange=function(){
			$scope.requestWordCloud();
		}
		
		$scope.requestWordCloud=function(){
			var day = $scope.date.getDate()+"";
			if(day.length==1){
				day="0"+day;
			}
			var month = ($scope.date.getMonth())+1+"";
			if(month.length==1){
				month="0"+month;
			}
			var year = $scope.date.getFullYear();
			
			$scope.selectedDate=year+""+month+""+day;
			
			var details = {
				getUrl : "rest/candidatewordcloud",
				getFormData : $scope.selectedTVorWeb.name+" "+$scope.selectedCandidate.name+" "+$scope.selectedDate
			};
			
			httpService.getDataByForm(details).then(onSuccessWC, onError);
		}
		
		var onSuccessWC=function(data){
			$scope.image=data.imageurl;
		}
		
		var onError=function(error){
			alert("Invalid Word Cloud!");
		}
		
		/* To display Logged in User */
		$scope.$watch('logged', function(newValue, oldValue) {
			$scope.logged = $window.localStorage.getItem("uname");
			//console.log($scope.logged + "**");
		});
		
}]);