<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $data = file_get_contents("php://input");
    $data = json_decode($data);
    
    $img = $data->image;
    $alt = $data->alt;

    //echo $img;

    $con = mysqli_connect("localhost", "root", "", "agility") or die("Couldn't connect to the server'");

    mysqli_query($con, "insert into customslider (imageurl, alt) values('$img', '$alt')");

    if(mysqli_affected_rows($con) == 1) {
        echo "Added";
    } else {
        echo "error";
    }
?>