angular
  .module('myApp')
  .service('usuarioService', function ($http) {
/*    function extraerData (data){
      return data.data;
    }*/
    var url = window.location.protocol + "//" + window.location.host + window.location.pathname + "ws/";
    //var url = "http://localhost/TPlaboratorioIV2016/ws/usuario/admin/facil";
    //var url = "http://www.egos27.somee.com/api/bandera";

    function traerUrl(param){
        if(param==null){
          return url;
        }
        console.log(url + param);
        return url + param;
      }

    this.traerTodos = function () {
      return $http.get(traerUrl("usuarios"))
      .then( function (data){

        console.log(data);
        //return data.data.Paises;

      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerPorPerfil = function (perfil) {
      return $http.get(traerUrl("usuarios/" + perfil))
      .then( function (data){

        console.log(data);
        //return data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

    this.traerPorId = function (id) {
      return $http.get(traerUrl("usuario/" + id))
      .then( function (data){

        //var soloBanderas = data.data.Paises.map(function(pais){
        //  return {BanderaChica:pais.BanderaChica};
        //});
        console.log(data);
        //return data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

    this.crear = function(usuario) {
      var myurl = traerUrl();
      return $http.post(traerUrl("usuario/crear"), usuario)
      .then( function (data){

        return data;
      
      },function (error){
        
        console.error(error);
      
      });
    }

  })