angular
  .module('myApp')
  .service('pizzaService', function ($http) {

    var url = window.location.protocol + "//" + window.location.host + window.location.pathname + "ws/";

    function traerUrl(param){
        if(param==null){
          return url;
        }
        console.log(url + param);
        return url + param;
      }

    this.traerTodas = function () {
      return $http.get(traerUrl("pizzas"))
      .then( function (data){

        return data.data;

      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerPorId = function (id) {
      return $http.get(traerUrl("pizzas/id/" + id))
      .then( function (data){

        console.log(data);
        //return data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

    this.crear = function(pizza) {
      var myurl = traerUrl();
      return $http.post(traerUrl("pizzas/crear"), pizza)
      .then( function (data){

        return data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

  })