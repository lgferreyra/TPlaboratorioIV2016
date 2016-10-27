var app = angular.module("myApp",['ui.router', 'angularFileUpload', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){

	$stateProvider
	.state("inicio", {
		url:"/inicio",
		templateUrl: "templates/inicio.html",
		controller: "controlInicio"
	})
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
	})
	.state("inmobiliaria", {
		url:"/inmobiliaria",
		abstract: true,
		templateUrl: "templates/inmobiliariaAbstracta.html",
		controller: "controlInmobiliaria"
	})
	.state("inmobiliaria.inicio", {
		url: "/inicio",
		views:{
			'contenido':{
				templateUrl:"templates/InmobiliariaInicio.html",
				controller:"controlInmobiliariaInicio"
			}
		}
	});
	$urlRouterProvider.otherwise('/inicio');
});