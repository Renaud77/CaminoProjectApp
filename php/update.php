<?php

include './bdd.php';


if (isset($_POST['name']) && (isset($_POST['display']) || isset($_POST['title']))) {
    $name = $_POST['name'];
    if (isset($_POST['display'])) {
        $display = (int) $_POST['display'];
        $query = "UPDATE state SET display='$display' WHERE name='$name'";
    } else if (isset($_POST['title'])) {
        $title = $_POST['title'];
        $query = "UPDATE state SET title='$title' WHERE name='$name'";
    }

    // Execute update.
    $l = $db->query($query);

    // Encode json.
    return json_encode(['status' => 200]);
}
die('Param does\'t valid');