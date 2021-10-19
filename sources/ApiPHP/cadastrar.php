<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$tipo = addslashes($dadosrecebidos['tipo']);
$nome = addslashes($dadosrecebidos['nome']);
$sobrenome = addslashes($dadosrecebidos['sobrenome']);
$senha = md5($dadosrecebidos['senha']);
$email =  addslashes($dadosrecebidos['email']);
$cel = addslashes($dadosrecebidos['cel']);

try {
	$query = "INSERT INTO table4al_table.usuarios (
									user_tipo,
									user_nome, 
									user_sobrenome,
									user_senha,
                                    user_email,
									user_celular)
						VALUES 			     (
									'$tipo',
									'$nome',
									'$sobrenome',
									'$senha',
                                    '$email',
									'$cel')";
									
	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();
	$lastid = $pdo->lastInsertId();	
	
	date_default_timezone_set('America/Sao_Paulo');
	$now = date('d/m/y H:i');
	$expires = date('d/m/y H:i', strtotime('+2 Hours'));
	$token = md5($now.rand(0,99999));
		
	$query = "
		INSERT INTO table4al_table.tokens (
			token_token,
			token_time, 
			token_expires,
			token_userID
		)
		VALUES (
			'$token',
			'$now',
			'$expires',
			'$lastid'
		)";
		
	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();		


	$to = $email;
	$subject = "Confirmação de e-mail Table4All";
	
	$link = "http://table4all.com.br/api/confirmarEmail.php?verify=".$token;
		
	$body = 
		"Você está recebendo este email pois uma tentativa"."\n".
		"de cadastrar o seu email foi realizada no aplicativo Table4All"."\n\n\n".
		"Para confirmar a ação clique no link abaixo"."\n".
		$link."\n\n\n".
		"caso não tenha não tenha solicitado o cadastro, sugerimos"."\n".
        "verificar a segurança do seu email ou alterar a senha."."\n\n\n".
        "ATENÇÃO: NÃO COMPARTILHE O LINK COM NINGUÉM.";
		
	$headers = 
		"From: suporte@table4all.com.br"."\n".
		"Reply-To: suporte@table4all.com.br"."\n".
		"X-Mailer: PHP/".phpversion();

	mail($to,$subject,$body,$headers);
      
    /*  
	$x = "para: ".$to."\n\nassunto: ".$subject."\n\ncorpo:\n".$body."\n\ncabeca:\n".$headers;		
	echo $x;
	*/

	echo json_encode($result);
	
} catch(PDOException $e) {
	//echo 'Error: ' . $e->getMessage();
	echo json_encode (false);
	}
	
?>