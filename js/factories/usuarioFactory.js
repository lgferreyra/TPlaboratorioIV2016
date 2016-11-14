angular
  .module('myApp')
  	.factory('usuarioFactory', function (bandera) {
  		var objeto = {};
  		objeto.nombreDelFactory = "factory de banderas";
  		objeto.traerTodo = traerTodo;
  		objeto.traerNombres = traerNombres;
  		objeto.traerBanderas = traerBanderas;
  		objeto.traerPais = traerPais;
  		return objeto;

  		function traerTodo () {
	      return bandera.traerTodo();
	    }

	    function traerNombres() {
	      return bandera.traerNombres();
	    }

	    function traerBanderas() {
	      return bandera.traerBanderas();
	    }

	    function traerPais(pais) {
	      return bandera.traerPais(pais);
	    }
  });