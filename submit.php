<?php
if (isset($_POST['submit'])) {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "error"; 
        exit;
    }

    $to = "fasnasharaf24@gmail.com";
    $headers = "From: $email\r\n";
    $messageBody = "Name: $name\r\n";
    $messageBody .= "Email: $email\r\n";
    $messageBody .= "Subject: $subject\r\n";
    $messageBody .= "Message:\r\n$message\r\n";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>

