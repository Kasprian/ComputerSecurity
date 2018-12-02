<?php 
session_start();
echo $_SESSION['konto_odbiorcy']; 

require_once "connect.php";
mysqli_report(MYSQLI_REPORT_STRICT);
try {
	$polaczenie = new mysqli($host, $db_user, $db_password, $db_name);

	if ($polaczenie->connect_errno!=0){
			throw new Exception(mysqli_connect_errno());
	}
	else{
		$numer_konta=htmlentities($_SESSION['numer_konta'], ENT_QUOTES, "UTF-8");
		
		if($rezultat = $polaczenie->query(sprintf("SELECT * FROM `przelewy` WHERE numer_konta='%s'",mysqli_real_escape_string($polaczenie,$numer_konta)))){
			echo '<style>table, th, td {border: 1px solid black;border-collapse: collapse;}th, td {padding: 5px;text-align: left;    }</style>';
			echo '<table style="width:100%">';
			echo '<tr>';
			$i=0;
			echo '<th>Konto odbiorcy</th>';
			echo '<th >Tytul</th>';
			echo '<th >Kwota</th></tr>';
			echo '</tr><tr>';
			while($res = mysqli_fetch_assoc($rezultat)) {
				echo '<tr>';
				echo "<td>".$res['konto_odbiorcy']."</td>";
				echo "<td>".$res['tytul']."</td>";
				echo "<td>".$res['kwota']."</td>";
				echo '</tr>';
			}
			echo  '</table>';
			echo '<a href="desktop.php">Wroc</a><br /><br />';
		}else{
				throw new Exception($polaczenie->error);
		}
		$polaczenie->close();
	}
}
catch(Exception $e){
		echo '<span style="color:red;">Błąd serwera! Przepraszamy za niedogodności i prosimy o wizytę w innym terminie!</span>';
		echo '<br />Informacja developerska: '.$e;
	}
?>

