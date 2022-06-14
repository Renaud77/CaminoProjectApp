<?php

include './bdd.php';

$query = "SELECT * FROM state";
$result = mysqli_query($db, $query);

// On récupère le résultat.
$result = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Encode json.
echo json_encode(['status' => 200, 'result' => $result]);

