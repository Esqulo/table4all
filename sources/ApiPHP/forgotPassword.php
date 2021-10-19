<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$email = addslashes($dadosrecebidos['email']);

try {
	$query = "SELECT * FROM table4al_table.usuarios WHERE user_email = '$email'";
									
	$res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );								
	
	if ($rows != ''){
		json_encode($rows);
		
		$userId = $rows['user_id'];
		$randpass = rand(10000, 999999);
        $newpass = md5($randpass);
        	
		$query = "
			UPDATE table4al_table.usuarios
			SET table4al_table.usuarios.user_senha = '$newpass'
			WHERE table4al_table.usuarios.user_id = '$userId'
		";
		
		$stmt = $pdo->prepare( $query );	
		$result = $stmt->execute();	
		
		
		$to = $rows['user_email'];
		$subject = "Redefinição de senha Table4All";
		
		$body = 
			"Você está recebendo este email pois"."\n".
			"foi solicitada a recuperação da sua senha pelo aplicativo"."\n".
			"Uma nova senha aleatória foi criada para sua conta, "."\n".
			"sujerimos que seja feita a alteração no próximo login"."\n\n\n".
			"Sua nova senha é: $randpass"."\n\n\n".
          	"Caso não tenha solicitado a alteração, não se preocupe, ".
          	"enviamos a nova senha apenas para o e-mail do responsável";
		
		$headers = 
			"From: suporte@table4all.com.br"."\n".
			"Reply-To: suporte@table4all.com.br"."\n".
			"X-Mailer: PHP/".phpversion();

		mail($to,$subject,$body,$headers);
      
      
		//$x = "para: ".$to."\n\nassunto: ".$subject."\n\ncorpo:\n".$body."\n\ncabeca:\n".$headers;		
		//echo $x;
      
		echo json_encode($result);
	} else{
		echo json_encode(false);
	}	
	
} catch(PDOException $e) {
	//echo 'Error: ' . $e->getMessage();
	echo json_encode (false);
	}
	
?>