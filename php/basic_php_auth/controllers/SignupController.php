<?php
include_once '../db.php';
session_start();
// remove all session variables
session_unset();

$invalid_form = false;
$username = format_input($_POST['username']);
if (!preg_match("/^[a-zA-Z-' ]*$/", $username)) {
    $_SESSION['name_err'] = "Only letters and white space allowed";
    $invalid_form = true;
}
$email = format_input($_POST['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['email_err'] = "Invalid email format";
    $invalid_form = true;
}
$password = format_input($_POST['password']);
$confirm_password = format_input($_POST['confirm_password']);
if ($confirm_password !== $password) {
    $_SESSION['pass_err'] = 'passwords do not match';
    $invalid_form = true;
}

if ($invalid_form == true) {
    header("Location: http://localhost:8080/pages/signup.php");
} else {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username,email,password) VALUES ('$username','$email','$hashed_password')";
    if (mysqli_query($connection, $sql)) {
        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        $_SESSION['password'] = $password;
        header("Location: http://localhost:8080/pages/home.php");
    } else {
        echo "Error: " . $sql . "
" . mysqli_error($connection);
        $_SESSION['pass_err'] = mysqli_error($connection);
        header("Location: http://localhost:8080/pages/signup.php");
    }
    mysqli_close($connection);
}



function format_input($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
