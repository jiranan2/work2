// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
    url: '/index',
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })
	  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AppCtrl'

  })
	  .state('History', {
    url: '/History',
    templateUrl: 'templates/History.html',
    //controller: 'AppCtrl'
  })
      .state('Home', {
    url: '/Home',
    templateUrl: 'templates/Home.html',
    //controller: 'AppCtrl'
})
	  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })
  $urlRouterProvider.otherwise('/login');
})
.controller('AppCtrl',function ($scpe,$state,$ionicPopup) {

	$scope.login={};
    var user="admin";
	var password="123456";
$scope.doLogin = function() {
	   console.log("alert");
	   console.log(password);
	   console.log($consloe.login.username);
	   console.log($consloe.login.password);
	   $ionicPopup.alert({
		    title:'��͡�Թ'
			template:'�Թ�յ�͹�Ѻ�������к�'
		)}

	   $state.go("history")
   }
})