<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $housing = $_POST['housing'];
  $flat = $_POST['flat'];
  $floor = $_POST['floor'];
  $msg = $_POST['msg'];
  $pay = $_POST['radiobutton'];


  $disturb = $_POST['dont-disturb']; // 1 или null
  $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

  $mail_message = '
  <html>
  <head>
      <title>Заявка</title>
  </head>
  <body>
      <h2>Заказ</h2>
      <ul>
          <li>Имя:' . $name . '</li>
          <li>Телефон: ' . $phone . '</li>
          <li>Улица: ' . $street . '</li>
          <li>Дом: ' . $house . '</li>
          <li>Корпус: ' . $housing . '</li>
          <li>Квартира: ' . $flat . '</li>
          <li>Этаж: ' . $floor . '</li>
          <li>Способ оплаты: ' . $pay . '</li>

          <li>Комментарий к заказу: ' . $msg . '</li>
          <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
      </ul>
  </body>
  </html>';

  $headers = "From: Администратор сайта Бургерной\r\n".
              "MIME-Version: 1.0" . "\r\n" .
              "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('uundead1@gmail.com', 'Заказ', $mail_message, $headers);
  $data = [];


  if ($mail) {
      $data['status'] = "OK";
      $data['mes'] = "Письмо успешно отправлено";
  }else{
      $data['status'] = "NO";
      $data['mes'] = "На сервере произошла ошибка";
  }

  echo json_encode($data);

 ?>
