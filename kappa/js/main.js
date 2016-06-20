

NG_APP.config(function($stateProvider, $provide, $urlRouterProvider,$httpProvider) {
	

	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};

/*
	$stateProvider
	 .state('___home___', {
		 url: '/home',
		 templateUrl: 'templates/home.html',
		 controller: 'initCtrl'
	 })
	 .state('___services___',{
		 url: '/services/:msisdn',
		 templateUrl : TEMPLATE_PATH + 'services/servicesList.html',
		 controller: 'initCtrl'
	 });

	 $urlRouterProvider.otherwise('/home');
*/
})



NG_APP.controller('initCtrl', function($scope,$rootScope){

	$scope.msisdn = '';
 	
	$scope.setMsisdn = function(){
		$scope.msisdn = $rootScope.BPaaSCatalog.msisdn;
	}
    

    
})

