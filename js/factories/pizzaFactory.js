angular
  .module('myApp')
  	.factory('pizzaFactory', function (pizzaService) {
  		var objeto = {};
  		objeto.nombreDelFactory = "factory pizzas";
  		objeto.traerTodas = traerTodas;
  		objeto.traerPorId = traerPorId;
        objeto.crear = crear;
  		return objeto;

  		function traerTodas() {
	      return pizzaService.traerTodas();
	    }

	    function crear(pizza) {
	      return pizzaService.crear(pizza);
	    }

	    function traerPorId(id) {
	      return pizzaService.traerPorId(id);
	    }
  });