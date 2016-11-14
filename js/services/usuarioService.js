angular
  .module('myApp')
  .service('usuarioService', function ($http) {
/*    function extraerData (data){
      return data.data;
    }*/
    var url = "http://www.egos27.somee.com/api/bandera";

    function traerUrl(param){
        if(param==null){
          return url;
        }
        return url + "/" + param;
      }

    this.traerTodo = function () {
      return $http.get(traerUrl())
      .then( function (data){

        return data.data.Paises;

      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerNombres = function () {
      return $http.get(traerUrl())
      .then( function (data){

        var soloPaises = data.data.Paises.map(function(pais){
          return {Nombre:pais.Nombre};
        });

        return soloPaises;
      
      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerBanderas = function () {
      return $http.get(traerUrl())
      .then( function (data){

        var soloBanderas = data.data.Paises.map(function(pais){
          return {BanderaChica:pais.BanderaChica};
        });

        return soloBanderas;
      
      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerPais = function(pais) {
      return $http.get(traerUrl(pais))
      .then( function (data){

        return data.data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

  })