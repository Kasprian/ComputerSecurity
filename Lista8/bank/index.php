<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: desktop.php');
		exit();
	}

?>
<!DOCTYPE html> 
<html lang="pl"> 
<head>  
  <meta charset="utf-8"> 
  <title>Bank</title> 
  <meta name="description" content="Strona bankowa">
  <meta name="author" content="Piotr Kasprowicz">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head> 
<body>

	
	<a href="rejestracja.php">Rejestracja - zaloz darmowe konto!</a>
	<br /><br />
	
	<form action="zaloguj.php" method="post">
	
		Login: <br /> <input type="text" name="login" /> <br />
		Haslo: <br /> <input type="password" name="haslo" /> <br /><br />
		<input type="submit" value="Zaloguj sie" />
	
	</form>
	
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>

</body> 
</html> 