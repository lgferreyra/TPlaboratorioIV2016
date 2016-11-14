<?php 
require_once"accesoDatos.php";
class Usuario {
	public $username;
	public $password;
	public $perfil;
    public $email;
    public $nombre;
    public $apellido;
    public $cuil;
    public $fecha;
    public $partido;
    public $localidad;
    public $direccion;
    public $numero;
    public $departamento;

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

	public function __construct(){

	}

	public static function LoginUsuario($username, $password){
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where username =:username and password = :password");
		$consulta->bindValue(':username', $username, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);
		$consulta->execute();
		echo $_SERVER['HTTP_HOST'];
		echo $_SERVER['REQUEST_URI'];
		$usuarioBuscado = $consulta->fetchObject('usuario');
		return $usuarioBuscado;
	}
    
    public static function InsertarUsuario($usuario) {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO usuarios (username, password, nombre, apellido, email, perfil, cuil, fecha, partido, localidad, direccion, numero, departamento) VALUES (:username,:password,:nombre,:apellido,:email,:perfil,:cuil,:fecha,:partido,:localidad,:direccion,:numero,:departamento)");
        $consulta->bindValue(':username', $usuario->username, PDO::PARAM_STR);
        $consulta->bindValue(':password', $usuario->password, PDO::PARAM_STR);
        $consulta->bindValue(':nombre', $usuario->nombre, PDO::PARAM_STR);
        $consulta->bindValue(':apellido', $usuario->apellido, PDO::PARAM_STR);
        $consulta->bindValue(':email', $usuario->email, PDO::PARAM_STR);
        $consulta->bindValue(':perfil', $usuario->perfil, PDO::PARAM_STR);
        $consulta->bindValue(':cuil', $usuario->cuil, PDO::PARAM_STR);
        $consulta->bindValue(':fecha', $usuario->fecha, PDO::PARAM_STR);
        $consulta->bindValue(':partido', $usuario->partido, PDO::PARAM_STR);
        $consulta->bindValue(':localidad', $usuario->localidad, PDO::PARAM_STR);
        $consulta->bindValue(':direccion', $usuario->direccion, PDO::PARAM_STR);
        $consulta->bindValue(':numero', $usuario->numero, PDO::PARAM_STR);
        $consulta->bindValue(':departamento', $usuario->departamento, PDO::PARAM_STR);
        $consulta->execute();
        return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }

    public static function TrearTodosUsuarios($perfil = null){
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