<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$id = (int) $_GET["id"];


$avis = json_decode(file_get_contents(__DIR__."/db/avis.json"));

$response= [];
foreach ($avis as $key => $value) {
   if (isset($value->prestataire)) {
    # code...
    if ($value->prestataire == $id) {
       $response[]= $value;
    }
   }
}
echo json_encode($response);