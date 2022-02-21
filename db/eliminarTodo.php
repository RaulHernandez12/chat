<?php
    require_once("conectar.php");

    $consulta = $conexion -> prepare("DELETE FROM mensajes");
    $consulta -> execute();

    echo json_encode("Eliminado");
?>