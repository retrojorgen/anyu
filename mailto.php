<?php
	require_once('config.php');

	header('Content-Type: application/json');

	$to = TO;
	$from = mysql_real_escape_string($_POST['email']);
	$message = mysql_real_escape_string($_POST['message']);
	$headers = 'From: ' . $to . "\r\n" .
    'Reply-To: '  . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	if(mail(
		'jorgeja@gmail.com',
		'Beskjed fra kunde',
		$_POST['message'], 
		$headers
	)) {
		echo "Beskjeden er sendt!";
	} else {
		echo "Vennligst prøv igjen.";
	}