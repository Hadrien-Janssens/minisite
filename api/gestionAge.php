<?php

function calculerAge(int $day, string $month, int $year) {
    // Convertir le mois en nombre
    $monthNumber = date_parse($month)['month'];
    
    $currentDate = getdate();
    $age = $currentDate['year'] - $year;

    // Ajuster l'âge si l'anniversaire n'est pas encore passé cette année
    if ($currentDate['mon'] < $monthNumber || ($currentDate['mon'] == $monthNumber && $currentDate['mday'] < $day)) {
        $age--;
    }

    return $age;
}


function traitementAge(int $day, string $month, int $year):bool {
    $age = calculerAge($day , $month, $year);
    
    if ($age < 18) {
        return false;
    }
    else {
        return true;
    }
   
}