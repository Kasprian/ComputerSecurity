<?php

	session_start();
	require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try 
		{
			$polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
			if ($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno());
			}
			else{
				
					$numer_konta=htmlentities($_SESSION['numer_konta'], ENT_QUOTES, "UTF-8");
					$nazwa_odbiorcy=htmlentities($_SESSION['nazwa_odbiorcy'], ENT_QUOTES, "UTF-8");
					$tytul=htmlentities($_SESSION['tytul'], ENT_QUOTES, "UTF-8");
					$konto_odbiorcy=htmlentities($_SESSION['konto_odbiorcy'], ENT_QUOTES, "UTF-8");
					$kwota=htmlentities($_SESSION['kwota'], ENT_QUOTES, "UTF-8");
					if ($polaczenie->query(sprintf("INSERT INTO przelewy(`numer_konta`,`user`,`tytul`,`konto_odbiorcy`,`kwota`) 
						VALUES ('%s','%s','%s','%s','%s')",
			mysqli_real_escape_string($polaczenie,$numer_konta),
			mysqli_real_escape_string($polaczenie,$nazwa_odbiorcy),
			mysqli_real_escape_string($polaczenie,$tytul),
			mysqli_real_escape_string($polaczenie,$konto_odbiorcy),
			mysqli_real_escape_string($polaczenie,$kwota)))){
						$_SESSION['udanyprzelew']=true;
						header('Location: powrot.php');
					}

					else
					{
						throw new Exception($polaczenie->error);
					}
				}
				
				$polaczenie->close();
			}
			
		catch(Exception $e)
		{
			echo '<span style="color:red;">Błąd serwera! Coś poszło nie tak!</span>';
			echo '<br />Informacja developerska: '.$e;
		}
		
	
?>