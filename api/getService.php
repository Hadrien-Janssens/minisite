<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$id = (int) $_GET["id"];

$services= json_decode(file_get_contents(__DIR__."/db/services.json"));

foreach ($services as $key => $value) {
    if ($value->id === $id) {
        echo json_encode($value);
        die();
    }
}