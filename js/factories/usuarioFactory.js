angular
  .module('myApp')
  	.factory('usuarioFactory', function (usuarioService) {
  		var objeto = {};
  		objeto.nombreDelFactory = "factory usuarios";
  		objeto.traerTodos = traerTodos;
  		objeto.traerPorPerfil = traerPorPerfil;
  		objeto.traerPorId = traerPorId;
  		return objeto;

  		function traerTodos() {
	      return usuarioService.traerTodos();
	    }

	    function traerPorPerfil(perfil) {
	      return usuarioService.traerPorPerfil(perfil);
	    }

	    function traerPorId(id) {
	      return usuarioService.traerPorId(id);
	    }
  });