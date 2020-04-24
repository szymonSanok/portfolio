<?php
$to = 'kontakt@sanokreklama.pl';
$subject = 'Formularz - zgłoszenie';
$name = $_POST['name'];
$from = $_POST['email'];
$message = $name . "\n" . $from . "\n" . $_POST['text'];
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $message, $headers);
echo "done";
