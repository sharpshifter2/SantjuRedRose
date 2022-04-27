<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "diariformulari";

    $con = new mysqli($host,$user,$pass,$db);
    if (!$con) {
        echo "There are some problems while connecting the database";
    }
?>