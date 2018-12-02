<?php

	session_start();

	if (isset($_POST['konto_odbiorcy']))
	{
		//Udana walidacja? Załóżmy, że tak!
		$wszystko_OK=true;
		
		$nazwa_odbiorcy=$_POST['nazwa_odbiorcy'];
	
		if ((strlen($nazwa_odbiorcy)<3) || (strlen($nazwa_odbiorcy)>20)){
			$wszystko_OK=false;
			$_SESSION['e_nazwa_odbiorcy']="Nazwa odbiorcy musi zawierać od 3 do 50 znaków!";
		}
		
		if (ctype_alnum($nazwa_odbiorcy)==false){
			$wszystko_OK=false;
			$_SESSION['e_nazwa_odbiorcy']="Nazwa odbiorcy może składać się tylko z liter i cyfr (bez polskich znaków)";
		}
		
		$konto_odbiorcy=$_POST['konto_odbiorcy'];
		
		if ((strlen($konto_odbiorcy)!=16)){
			$wszystko_OK=false;
			$_SESSION['e_nazwa_odbiorcy']="Nieprawdiłowy numer konta";
		}
		if (ctype_digit($konto_odbiorcy)==false){
			$wszystko_OK=false;
			$_SESSION['e_nazwa_odbiorcy']="Numer konta składa sie z cyfr";
		}
		
		//Sprawdź poprawność tytulu
		$tytul = $_POST['tytul'];
		
		//Sprawdzenie długości tytulu
		if ((strlen($tytul)<3) || (strlen($tytul)>50))
		{
			$wszystko_OK=false;
			$_SESSION['e_tytul']="Tytul musi zawierać od 3 do 50 znaków!";
		}
		
		if (ctype_alnum($tytul)==false){
			$wszystko_OK=false;
			$_SESSION['e_tytul']="Tytul może składać się tylko z liter i cyfr (bez polskich znaków)";
		}
		
		$kwota=$_POST['kwota'];
		
		//Zapamiętaj wprowadzone dane

		if ($wszystko_OK==true){
		$_SESSION['nazwa_odbiorcy'] = $nazwa_odbiorcy;
		$_SESSION['konto_odbiorcy'] = $konto_odbiorcy;
		$_SESSION['tytul'] = $tytul;
		$_SESSION['kwota'] = $kwota;
		$_SESSION['potwierdzenie']=true;
		header('Location: potwierdzenie.php');
		}
				
					
}
		
	
	
?>


<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Bank - przelew</title>
	
	<style>
		.error
		{
			color:red;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	</style>
</head>

<body>
	
	<form method="post">
	
		Nazwa odbiorcy: <br /> <input type="text" value="<?php
		/*	if (isset($_SESSION['nazwa_odbiorcy']))
			{
				echo $_SESSION['nazwa_odbiorcy'];
				unset($_SESSION['nazwa_odbiorcy']);
			}*/
		?>" name="nazwa_odbiorcy" /><br />
			<?php
		if (isset($_SESSION['e_nazwa_odbiorcy'])){
				echo '<div class="error">'.$_SESSION['e_nazwa_odbiorcy'].'</div>';
				unset($_SESSION['e_nazwa_odbiorcy']);
			}
		?>
		
		Na rachunek: <br /> <input type="text"  value="<?php
		/*	if (isset($_SESSION['konto_odbiorcy']))
			{
				echo $_SESSION['konto_odbiorcy'];
				unset($_SESSION['konto_odbiorcy']);
			}*/
		?>" name="konto_odbiorcy" /><br />
		
		<?php
		if (isset($_SESSION['e_konto_odbiorcy'])){
				echo '<div class="error">'.$_SESSION['e_konto_odbiorcy'].'</div>';
				unset($_SESSION['e_konto_odbiorcy']);
			}
		?>
		
		Tytul: <br /> <input type="text" value="<?php
		/*	if (isset($_SESSION['kwota']))
			{
				echo $_SESSION['kwota'];
				unset($_SESSION['kwota']);
			}*/
		?>" name="tytul" /><br />
		
		<?php
		if (isset($_SESSION['e_tytul'])){
				echo '<div class="error">'.$_SESSION['e_tytul'].'</div>';
				unset($_SESSION['e_tytul']);
			}
		?>
		
		Kwota: <br /> <input type="text" value="<?php
		/*	if (isset($_SESSION['kwota']))
			{
				echo $_SESSION['kwota'];
				unset($_SESSION['kwota']);
			}*/
		?>" name="kwota" /><br />
		
		<?php
		if (isset($_SESSION['e_kwota'])){
				echo '<div class="error">'.$_SESSION['e_kwota'].'</div>';
				unset($_SESSION['e_kwota']);
			}
		?>
				
		<input type="submit" value="Wykonaj przelew" />
		
	</form>

</body>
</html>