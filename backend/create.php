<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

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