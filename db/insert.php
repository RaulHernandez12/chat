<?php
    require_once("conectar.php");
    $mensaje = $_POST["mensaje"];
    $id = $_POST["id"];
    $consulta = $conexion -> prepare("INSERT INTO mensajes (ID , mensaje) VALUES (?, ?);");
    $consulta -> bind_param("is", $id, $mensaje);
    $consulta -> execute();
    
    echo json_encode($id);
?>