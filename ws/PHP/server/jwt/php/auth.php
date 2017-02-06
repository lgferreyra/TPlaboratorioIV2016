<?php
include_once '../vendor/autoload.php';
require '../../../clases/Usuario.php';
use \Firebase\JWT\JWT;

$DatosPorPost = file_get_contents("php://input");
$respuesta = json_decode($DatosPorPost);

$result = Usuario::LoginUsuario($respuesta->username, $respuesta->password);

if ($result != null) {
    $token["exp"] = time() + 3600;
    $token["message"] = "userRegister";
    $token["perfil"] = $result->perfil;

    $key = "123456";

    /**
    * IMPORTANT:
    * You must specify supported algorithms for your application. See
    * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
    * for a list of spec-compliant algorithms.
    */
    $jwt = JWT::encode($token, $key);
    $myArray["myToken"] = $jwt;
    echo json_encode($myArray);    
} else {
    $myArray["myToken"] = null;
    echo json_encode($myArray);
}



?>