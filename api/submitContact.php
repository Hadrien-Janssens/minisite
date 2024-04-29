<?php
require_once __DIR__."/gestionFormulaire.php";

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//recuper les données envoyées au serveur
$data = json_decode(file_get_contents('php://input'), true);


// traitement des données
$regles = [
    "nom" => [
        "require" => true,
    ],
    "prenom" => [
        "require" => true,
    ],
    "email" => [
        "require" => true,
    ],
    "message"=> [
        "require"=> true,
        "max"=> 200,
        "min"=> 2
    ]
];

$errors = traitement($regles, $data);

if (isset($errors) && count($errors)<= 0) {
    $contact = json_decode(file_get_contents(__DIR__.'/db/contact.json'), true);
    $contact[] = $data;
    file_put_contents(__DIR__.'/db/contact.json', json_encode($contact, JSON_PRETTY_PRINT));
    http_response_code(201);

}
else {
    http_response_code(422);
    echo json_encode($errors);
}