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
		params: {
            usuarioNombre: null
        },
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
	.state("pizzeria.cliente", {
		url: "/cliente",
		views:{
			'contenido':{
				templateUrl:"templates/pizzeriaCliente.html",
				controller:"controlPizzeriaCliente"
			}
		}
	})
	.state("pizzeria.pedir", {
		url: "/pedir",
		views:{
			'contenido':{
				templateUrl:"templates/pizzeriaPedir.html",
				controller:"controlPizzeriaPedir"
			}
		}
	});
	$urlRouterProvider.otherwise('/pizzeria/inicio');

	$authProvider.loginUrl="TPlaboratorioIV2016/ws/PHP/server/jwt/php/auth.php";
	$authProvider.tokenName="myToken";
	$authProvider.tokenPrefix="myApp";
	$authProvider.authHeader="data";
});