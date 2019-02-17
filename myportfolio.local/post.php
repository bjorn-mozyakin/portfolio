<?php

// trim() - убираем все лишние пробелы и переносы строк,
// htmlspecialchars() - преобразует специальные символы в HTML сущности,
// будем считать для того,
// чтобы простейшие попытки взломать наш сайт обломались,
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$text = htmlspecialchars(trim($_POST['message']));

// $to - кому отправляем
$email = array('mfortest@yandex.ru', 'rakov.di@gmail.com');
$to = implode(",", $email);

// $subject - тема сообщения
$subject='Письмо с сайта portfolio.crablog.ru';

// $message - текст сообщения
$message = '
            <p><strong>Имя:</strong> '.$name.'</p>
            <p><strong>Контактный e-mail:<strong> <a href="mailto:'.$email.'">'.$email.'</a></p>
            <p><strong>Текст сообщения:</strong><br />'.$text.'<p>
          ';

// $headers - Дополнительные загловки
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <info@portfolio.crablog.ru>' . "\r\n";

// функция, которая отправляет наше письмо.
$mail = mail($to, $subject, $message, $headers);

//проверяем отправку
if($mail) echo 'true';
else echo 'false';

?>

