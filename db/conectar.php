<?php

    $dominioPermitido = "http://localhost:3000";
    header("Access-Control-Allow-Origin: $dominioPermitido");
    header("Access-Control-Allow-Headers: content-type");
    header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
    $conexion = mysqli_connect('127.0.0.1','root','', 'chat');
      
?>