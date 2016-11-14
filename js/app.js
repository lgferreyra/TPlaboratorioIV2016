var app = angular.module("myApp",['ui.router', 'angularFileUpload', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){

	$stateProvider
	.state("pizzeria", {
		url:"/pizzeria",
		abstract: true,
		templateUrl: "templates/pizzeriaAbstracta.html",
		controller: "controlPizzeria"
	})
	.state("pizzeria.inicio", {
		url: "/inicio",
		views:{
			'contenido':{
				templateUrl:"templates/PizzeriaInicio.html",
				controller:"controlPizzeriaInicio"
			}
		}
	})
	.state("pizzeria.login", {
		url: "/login",
		views:{
			'contenido':{
				templateUrl:"templates/PizzeriaLogin.html",
				controller:"controlPizzeriaLogin"
			}
		}
	})
	.state("pizzeria.registro", {
		url: "/registro",
		views:{
			'contenido':{
				templateUrl:"templates/PizzeriaRegistro.html",
				controller:"controlPizzeriaRegistro"
			}
		}
	});
	$urlRouterProvider.otherwise('/pizzeria/inicio');
});