<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->isHTML(true);

  $mail->setForm('info@mail.ru', 'web-kochnev');
  $mail->addAdress('2008vovchik@mail.ru');
  $mail->Subject = 'Здорова, у тебя получилось!';

$body = '<h1>Молодчина</h1>';

$mail->Body = $body;

if (!$mail->send()){
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>