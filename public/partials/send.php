<?php
$name = $_POST[ "name" ] ;
$email = $_POST[ "email" ] ;
$message = $_POST[ "message" ] ;

mail("rolando.cosme@gmail.com", "Ladybug Contact", $message, "From: $email\r\n" );
echo "Thank you for contacting us!";

?>