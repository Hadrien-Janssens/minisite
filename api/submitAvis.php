<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

require_once __DIR__."/gestionFormulaire.php";
require_once __DIR__."/gestionAge.php";

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
    "ville" => [
        "require" => true,
    ],
    "message"=> [
        "require"=> true,
        "max"=> 200,
        "min"=> 2
    ],
    "day"=>[
        "require"=> true,
    ],
    "month"=>[
        "require"=> true,
    ],
    "year"=>[
        "require"=> true,
    ]
];

//data de base
$errors = traitement($regles, $data);

//conditionner l'age requis pour les commentaires
if (!traitementAge($data['day'],$data['month'],$data['year'])) {
    $errors['age'] = 'Vous devez être majeur';
}
//attribution du score du prestataire dans le DB
function incrementStarArray($data){
    if (isset($data["prestataire"]) && $data['prestataire'] !== "0") {
        
        $teams = json_decode(file_get_contents(__DIR__.'/db/team.json'), true);
        //le & pour modifier la reference et pas la copie generée par la boucle, j'aurais pu boucler sur les keys qui permettent egalement de modifier la reference
        foreach ($teams as &$value) {
            if (intval($value["id"]) === intval($data['prestataire'])) {
                
                $value['star'][] = $data['star'];
                file_put_contents(__DIR__.'/db/team.json', json_encode($teams, JSON_PRETTY_PRINT));
                
                break;
            }
        }
    }
}

//reponse et action du serveur en fonction des données
if (isset($errors) && count($errors)<= 0) {
    $avis = json_decode(file_get_contents(__DIR__.'/db/avis.json'), true);
    $avis[] = $data;
    file_put_contents(__DIR__.'/db/avis.json', json_encode($avis, JSON_PRETTY_PRINT));
    incrementStarArray($data);
    http_response_code(201);
}
else {
    http_response_code(422);
    echo json_encode($errors);
}