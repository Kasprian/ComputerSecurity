<?php

	session_start();
	
	if (!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}
	
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Bank - konto uzytkownika</title>
</head>

<body>
	
<?php

	echo "<p>Witaj ".$_SESSION['user'].'! [ <a href="logout.php">Wyloguj się!</a> ]</p>';
	echo "<p>Twój numer konta to ".$_SESSION['numer_konta'];
	echo '<p>[<a href="przelew.php">Wykonaj przelew!</a> ]</p>';
	echo '[<a href="historia.php">Historia przelewów!</a> ]</p>';
?>

</body>
</html>