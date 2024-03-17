<?php
include('connection.php');

$query = $mysqli->prepare('select * from news');
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = 'no news';
} else {
    $query->bind_result($id, $title, $text, $author, $created_at, $updated_at);
    $news = [];
    while ($query->fetch()) {
        $new =[
            'id' => $id,
            'title' => $title,
            'text' => $text,
            'author' => $author,
            'created_at' => $created_at,
            'updated_at' => $updated_at
        ];
    $news[] = $new;
}
}

$response['status'] = "success";
$response['news'] = $news;

echo json_encode($response);