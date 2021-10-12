<?php
session_start();

// responsible for checking authorisation

if(!isset($_SESSION['username']) || !isset($_SESSION['email'])) {
    header("Location: http://localhost:8080/index.php");
}
