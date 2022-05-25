<?php

$user = $_POST["usuario"];
$clave = $_POST["clave"];
$email = $_POST["email"];

$link = new mysqli ("localhost","root","","academia");

if($link->connect_errno||$link->connect_error){
    
    echo "Algo ah ocurrido y/o ah salido mal" .$link->connect_errno();

    $link->close;
}

$SQL = "INSERT INTO personas VALUES ('$user','$clave','$email')";

$link->query($SQL);


?>

<a href="index.html">Volver</a>