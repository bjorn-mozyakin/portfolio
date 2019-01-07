<?php
  require 'connect.php';

  if ($_POST['action'] == 'remove') {
    $sql = "DELETE FROM table_words WHERE id=".$_POST['id'];
    $result = mysqli_query($con, $sql);
  }

  if ($_POST['action'] == 'add') {
    $sql = "
      INSERT INTO table_words (id, word_english, word_russian, list)
      VALUES (
        NULL,
        '".$_POST['data']['word-english']."',
        '".$_POST['data']['word-russian']."',
        '".$_POST['data']['word-list']."'
      )";
    $result = mysqli_query($con, $sql);


    if ($result = mysqli_query($con, $sql)) {

      // $sql = "SELECT FROM table_words WHERE id=".mysqli_insert_id($con);
      $sql = "SELECT id, word_english, word_russian FROM table_words ORDER BY id DESC LIMIT 1";
      $result = mysqli_query($con, $sql);
      $words = [];
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $words[$i]['id'] = $row['id'];
        $words[$i]['word_english'] = $row['word_english'];
        $words[$i]['word_russian'] = $row['word_russian'];
        $i++;
      }
      echo json_encode($words);
    } else {
      http_response_code(404);
    }

    // echo json_encode(mysqli_insert_id($con));
  }

  if ($_POST['action'] == 'show') {
    $words = [];
    $sql = "SELECT id, word_english, word_russian FROM table_words";
    $result = mysqli_query($con, $sql);

    if ($result = mysqli_query($con, $sql)) {
      $i = 0;
      while ($row = mysqli_fetch_assoc($result)) {
        $words[$i]['id'] = $row['id'];
        $words[$i]['word_english'] = $row['word_english'];
        $words[$i]['word_russian'] = $row['word_russian'];
        $i++;
      }

      echo json_encode($words);
    } else {
      http_response_code(404);
    }
  }

  mysqli_close($con);
?>