<?php 
require_once"accesoDatos.php";
class Usuario {
	public $username;
	public $password;
	public $perfil;
    public $email;
    public $nrodoc;
    public $nombre;
    public $apellido;
    public $cuil;
    public $fecha;
    public $partido;
    public $localidad;
    public $direccion;
    public $numero;
    public $departamento;
    public $foto;

	public function getUser(){
		return $this->username;
	}

	public function setUser($username){
		$this->username = $username;
	}

	public function getPass(){
		return $this->password;
	}

	public function setPass($pass){
		$this->password = $password;
	}

	public function getPerfil(){
		return $this->perfil;
	}

	public function setPerfil($perfil){
		$this->perfil = $perfil;
	}
    
    public function getEmail(){
		return $this->email;
	}

	public function setEmail($email){
		$this->email = $email;
	}
    
    public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
	}
    
    public function getApellido(){
		return $this->apellido;
	}

	public function setApellido($apellido){
		$this->apellido = $apellido;
	}

	public function getCuil(){
		return $this->cuil;
	}

	public function setCuil($cuil){
		$this->cuil = $cuil;
	}

	public function getFecha(){
		return $this->fecha;
	}

	public function setFecha($fecha){
		$this->fecha = $fecha;
	}

	public function getPartido(){
		return $this->partido;
	}

	public function setPartido($partido){
		$this->partido = $partido;
	}

	public function getLocalidad(){
		return $this->localidad;
	}

	public function setLocalidad($localidad){
		$this->localidad = $localidad;
	}

	public function getDireccion(){
		return $this->direccion;
	}

	public function setDireccion($direccion){
		$this->direccion = $direccion;
	}

	public function getNumero(){
		return $this->numero;
	}

	public function setNumero($numero){
		$this->numero = $numero;
	}

	public function getDepartamento(){
		return $this->departamento;
	}

	public function setDepartamento($departamento){
		$this->departamento = $departamento;
	}

	public function getFoto(){
		return $this->foto;
	}

	public function setFoto($foto){
		$this->foto = $foto;
	}

	public function getNrodoc(){
		return $this->nrodoc;
	}

	public function setNrodoc($nrodoc){
		$this->nrodoc = $nrodoc;
	}

	public function __construct(){

	}

	public static function LoginUsuario($username, $password){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where username =:username and password = :password");
		$consulta->bindValue(':username', $username, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);
		$consulta->execute();
		$usuarioBuscado = $consulta->fetchObject('usuario');
		return $usuarioBuscado;
	}

	public static function TraerUsuario($id){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where id =:id");
		$consulta->bindValue(':id', $id, PDO::PARAM_INT);
		$consulta->execute();
		$usuarioBuscado = $consulta->fetchObject('usuario');
		return $usuarioBuscado;
	}
    
    public static function InsertarUsuario($usuario) {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        if($usuario['perfil']!=null && $usuario['perfil']=='cliente'){

        	$consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO usuarios (username, password, nombre, apellido, email, perfil, nrodoc, fecha, partido, localidad, direccion, numero, departamento, foto) VALUES (:username,:password,:nombre,:apellido,:email,:perfil,:nrodoc,:fecha,:partido,:localidad,:direccion,:numero,:departamento,:foto)");

        } else if($usuario['perfil']!=null && $usuario['perfil']=='empleado' || $usuario['perfil']=='encargado'){

        	$consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO usuarios (username, password, nombre, apellido, email, perfil, nrodoc, cuil, fecha, foto) VALUES (:username,:password,:nombre,:apellido,:email,:perfil,:nrodoc,:cuil,:fecha,:foto)");
        }

        $consulta->bindValue(':username', $usuario['username'], PDO::PARAM_STR);
        $consulta->bindValue(':password', $usuario['password'], PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $usuario['nombre'], PDO::PARAM_STR);
        $consulta->bindValue(':apellido', $usuario['apellido'], PDO::PARAM_STR);
        $consulta->bindValue(':email', $usuario['email'], PDO::PARAM_STR);
        $consulta->bindValue(':perfil', $usuario['perfil'], PDO::PARAM_STR);
        $consulta->bindValue(':nrodoc', $usuario['nrodoc'], PDO::PARAM_STR);
        if(array_key_exists('cuil', $usuario)){
        	$consulta->bindValue(':cuil', $usuario['cuil'], PDO::PARAM_STR);
        }
        $consulta->bindValue(':fecha', $usuario['fecha'], PDO::PARAM_STR);
        if(array_key_exists('partido', $usuario)){
        	$consulta->bindValue(':partido', $usuario['partido'], PDO::PARAM_STR);
        }
        if(array_key_exists('localidad', $usuario)){
        	$consulta->bindValue(':localidad', $usuario['localidad'], PDO::PARAM_STR);
        }
        if(array_key_exists('direccion', $usuario)){
        	$consulta->bindValue(':direccion', $usuario['direccion'], PDO::PARAM_STR);
        }
        if(array_key_exists('numero', $usuario)){
        	$consulta->bindValue(':numero', $usuario['numero'], PDO::PARAM_STR);
        }
        if(array_key_exists('departamento', $usuario)){
        	$consulta->bindValue(':departamento', $usuario['departamento'], PDO::PARAM_STR);
        }
        $consulta->bindValue(':foto', $usuario['foto'], PDO::PARAM_STR);
        $consulta->execute();
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    public static function TraerTodosLosUsuarios($perfil = null){
    	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
    	if($perfil!=null){
    		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where perfil = :perfil");
    		$consulta->bindValue(':perfil', $perfil, PDO::PARAM_STR);
    	} else {
    		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios");	
    	}
		
		$consulta->execute();			
		$arrUsuarios= $consulta->fetchAll(PDO::FETCH_CLASS, "usuario");	
		return $arrUsuarios;
    }
}
 ?>