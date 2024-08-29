<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $to = "eduardotoomaz@Outlook.com";
    $subject = "Contato pelo site-portfolio";

    $body = "Nome: " . $name . "\r\n" .
            "E-mail: " . $email . "\r\n" .
            "Mensagem: " . $message;
    $header = "From: eduardotoomaz@Outlook.com" . "\r\n" .
            "Reply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL) . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

    try {
        if (mail($to, $subject, $body, $header)) {
            echo "Email enviado com sucesso";
        } else {
            echo "Email não foi enviado";
        }
    } catch (Exception $e) {
        echo "Erro ao enviar email: " . $e->getMessage();
    }
}

?>