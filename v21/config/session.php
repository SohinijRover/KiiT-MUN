<?php
    session_start();
    if(!isset($_SESSION['email']) || !isset($_SESSION['delegation'])) {
        $login = false;
        header("Location: ./login.html");
    }

?>