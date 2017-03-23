'use strict';

var myApp = angular.module('myApp', ['ui.router','ui.bootstrap','ui.select','ngSanitize', 'ngAnimate','ng-fusioncharts']);
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home',{
        	url: '/',
        	views: {
	            'header': {
	                templateUrl: 'templates/partials/header.html'
	            },
	            'content': {
	                templateUrl: 'templates/partials/dashboard.html',
	                controller: 'HomeController'
	            },
	            'footer': {
	                templateUrl: 'templates/partials/footer.html'
	            }
	        }
        })
        .state('webtrends',{
        	url: '/webtrends',
        	views: {
	            'header': {
	                templateUrl: 'templates/partials/header.html'
	            },
	            'content': {
	                templateUrl: 'templates/partials/webtrends.html',
	                controller: 'WebTrendsController'
	            },
	            'footer': {
	                templateUrl: 'templates/partials/footer.html'
	            }
	        }
        })
        .state('tvtrends',{
        	url: '/tvtrends',
        	views: {
	            'header': {
	                templateUrl: 'templates/partials/header.html'
	            },
	            'content': {
	                templateUrl: 'templates/partials/tvtrends.html',
	                controller: 'TVTrendsController'
	            },
	            'footer': {
	                templateUrl: 'templates/partials/footer.html'
	            }
	        }
        })
        .state('wordclouds',{
        	url: '/wordclouds',
        	views: {
	            'header': {
	                templateUrl: 'templates/partials/header.html'
	            },
	            'content': {
	                templateUrl: 'templates/partials/wordclouds.html',
	                controller: 'WordCloudsController'
	            },
	            'footer': {
	                templateUrl: 'templates/partials/footer.html'
	            }
	        }
        })
 
}]);
