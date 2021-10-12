<?php

session_start();
// remove all session variables
session_unset();

header("Location: http://localhost:8080/index.php");