
<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $message = addslashes($_POST['message']);

    $to = "eduardotoomaz@Outlook.com";
    $subject = "Contato pelo site-portfolio";

    $body = "Nome: ".$name. "\r\n".
            "E-mail: ".$email. "\r\n".
            "Mensagem: ".$message;
    $header = "From:eduardotoomaz@Outlook.com"."\r\n".
            "Reply-To: ".$email;."\r\n".
            "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){

        echo("Email enviado com sucesso")

    } else {

        echo("Email nao foi enviado")
        
    }
    
} else {
    echo("Email nao foi enviado, favor verificar se o formulario foi preenchido corretamente");

}

?>