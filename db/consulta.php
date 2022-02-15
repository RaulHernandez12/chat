<?php
    require_once("conectar.php");
    // $conexion = mysqli_connect('127.0.0.1','root','', 'chat');

    $mostrar = "SELECT * FROM mensajes,usuarios WHERE mensajes.id = usuarios.id ORDER BY NumeroMens;"; // selecionamos todos los campos de nuestra tabla personas
    $resultado = mysqli_query($conexion,$mostrar); // ejecutamos la consulta
    $resultado = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

    
    echo json_encode($resultado);    
?>