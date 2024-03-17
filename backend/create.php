<?php
include('connection.php');

if (!empty($_POST['title'] && !empty($_POST['text'])) ) {
    $title = $_POST['title'];
    $text = $_POST['text'];
    $query = $mysqli->prepare("insert into news (title, text) values (?,?)");
    $query->bind_param('ss', $title, $text);
    $query->execute();

    if ($query->affected_rows > 0) {
        $response['status'] = "news added successfully";
    } else {
        $response['status'] = "failed to add news";
    }
} else {
    $response['status'] = "missing inputs";
}

echo json_encode($response);