.controller('loginCtrl',function ($scpe,$state,$ionicPopup) {
	var url="http://localhost/ionic_php/";
	$scope.login={};
    var user="admin";
	var password="123456";
$scope.doLogin = function() {
	   console.log("alert");
	   console.log(password);
	   console.log($consloe.login.username);
	   console.log($consloe.login.password);
	   $ionicPopup.alert({
		    title:'��͡�Թ',
			template:'�Թ�յ�͹�Ѻ�������к�'
		})

	   $state.go("history");
     }
   }
})