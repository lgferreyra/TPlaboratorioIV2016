var app = angular.module("myApp",['ui.router', 'angularFileUpload', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){

	$stateProvider.state("portal", {
		url:"/portal",
		abstract: true,
		templateUrl: "portal.html",
		controller: "controlPortal"
	})
	.state("portal.inicio", {
		url: "/inicio",
		views:{
			'contenido':{
				templateUrl:"inicio.html",
				controller:"controlInicio"
			}
		}
	});
	$urlRouterProvider.otherwise('/inicio');
});