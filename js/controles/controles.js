//PIZZERIA
app.controller("controlPizzeria", function($scope, $state){
	$scope.Registro=function(){
		$state.go('pizzeria.registro');
		$('.button-collapse').sideNav('hide');
	}

	$scope.Ingresar=function(){
		$state.go('pizzeria.login')
		$('.button-collapse').sideNav('hide');
	}

	$(".button-collapse").sideNav();
});

app.controller("controlPizzeriaInicio", function($scope){
	
});

app.controller("controlPizzeriaLogin", function($scope){
	
});

app.controller("controlPizzeriaRegistro", function($scope, $http, FileUploader){
	$scope.usuario={};

	console.info($scope.usuario);

	$scope.uploader = new FileUploader({url: 'ws/PHP/upload.php'});
	$scope.uploader.queueLimit = 1; // indico cuantos archivos permito cargar
	        
	/* Si quiero restringir los archivos a imagenes añado este filtro */
	$scope.uploader.filters.push({
	      name: 'imageFilter',
	      fn: function(item, options) {
	          var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
	          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
	      }
	});

	$scope.quitar = function(){
		$scope.uploader.clearQueue();
		$scope.file=null;
		$scope.path=null;
	}

	$scope.guardar = function(){
		console.info($scope.usuario);
	}

	$(document).ready(function() {
    	$('select').material_select();

    	$("#nrodoc").keydown(function (e) {
	        // Allow: backspace, delete, tab, escape, enter and .
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	             // Allow: Ctrl+A
	            (e.keyCode == 65 && e.ctrlKey === true) ||
	             // Allow: Ctrl+C
	            (e.keyCode == 67 && e.ctrlKey === true) ||
	             // Allow: Ctrl+X
	            (e.keyCode == 88 && e.ctrlKey === true) ||
	             // Allow: home, end, left, right
	            (e.keyCode >= 35 && e.keyCode <= 39)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
    	});
	});
});
