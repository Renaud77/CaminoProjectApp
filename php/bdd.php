<?php

/*
 * Fichier réutilisable pour la connection à la base de donnée.
 */

$servername = 'localhost';
$username = 'root';
$password = '';

$db = new mysqli($servername, $username, $password);

//On vérifie la connexion
if($db->connect_error){
    die('Erreur : ' . $db->connect_error);
}

mysqli_select_db($db, '0pp5m9m0');


return $db;