<?php

include './bdd.php';

var_dump($_POST);
if ((isset($_POST['name']) && in_array($_POST['name'], ['t1', 't2', 't3'])) && (isset($_POST['display']) && in_array($_POST['display'], ['0', '1']))) {
    $display = (int) $_POST['display'];
    $name = $_POST['name'];
    $query = "UPDATE state SET display='$display' WHERE name='$name'";

    // Execute update.
    $l = $db->query($query);

    // Encode json.
    return json_encode(['status' => 200]);
}

die('Param does\'t valid');