//PIZZERIA
app.controller("controlPizzeria", function($scope){

	function showBack(){
		return !$state.is("pizzeria.inicio");
	}

});

app.controller("controlPizzeriaInicio", function($scope){
	
});

app.controller("controlPizzeriaLogin", function($scope){
	
});

app.controller("controlPizzeriaRegistro", function($scope, $http){
	$scope.usuario={};

	console.info($scope.usuario);


	$scope.guardar = function(){
		console.info($scope.usuario);
	}

	$(document).ready(function() {
    $('select').material_select();
  });
});
