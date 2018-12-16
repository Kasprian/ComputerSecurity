<?php

	session_start();
	
	if (!isset($_SESSION['potwierdzenie']))
	{
		header('Location: index.php');
		exit();
	}
	else
	{
		unset($_SESSION['potwierdzenie']);
	}

?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Bank - potwierdzenie przelewu</title>
</head>

<body>

	<table style="width:100%">
		<tr>
			<th>Nazwa odbiorcy:</th>
			<td><?php echo $_SESSION['nazwa_odbiorcy']; ?></td>
		</tr>
		<tr>
			<th>Konto odbiorcy</th>
			<td><?php echo $_SESSION['konto_odbiorcy']; ?></td>
		</tr>
		<tr>
			<th>Tytul przelewu</th>
			<td><?php echo $_SESSION['tytul']; ?></td>
		</tr>
		<tr>
			<th>Kwota</th>
			<td><?php echo $_SESSION['kwota']; ?></td>
		</tr>
	</table>
	<a href="wykonaj.php">Wykonaj przelew</a><br /><br />
	<a href="desktop.php">Wroc</a><br /><br />
</body>
</html>