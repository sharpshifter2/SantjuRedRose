<?php

$nom = $_POST['nom'];
$text = $_POST['text'];

$conn = new mysqli('localhost','root','','exlogin');

$sql="INSERT INTO loginn(nom,text) VALUES('$nom','$text')";

    if($conn->query($sql) === TRUE){
        echo "Data inserted";
    }
    else {
        echo "Error:",$sql."<br>".$conn->error;
    }
?>