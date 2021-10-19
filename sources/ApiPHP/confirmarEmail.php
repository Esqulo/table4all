<?php
include_once('conexao.php'); 

if(!empty($_GET['verify'])){
	$token = $_GET['verify'];
	
	date_default_timezone_set('America/Sao_Paulo');
	$now = date('d/m/y H:i');
	
	$query = "SELECT * FROM table4al_table.tokens WHERE token_token = '$token'";
	$res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
	json_encode($rows);	 

	$id = $rows['token_userId'];
	$expires = $rows['token_expires'];
	$used = $rows['token_used'];
	
	
	if ($now < $expires){
		if($used == '0'){
         	$query = "
				UPDATE table4al_table.tokens
				SET table4al_table.tokens.token_used = '1'
				WHERE table4al_table.tokens.token_token = '$token'
			";

			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();      
          
			$query = "SELECT * FROM table4al_table.usuarios WHERE user_id = '$id'";
			$res = $pdo->query( $query );
			$rows = $res->fetch(PDO::FETCH_ASSOC );
			json_encode($rows);
			
			$email = $rows['user_email'];
			
			$query = "
				UPDATE table4al_table.usuarios
				SET table4al_table.usuarios.user_claimemail = '1'
				WHERE table4al_table.usuarios.user_id = '$id'
			";
					
			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();
			
			echo "E-mail verificado com sucesso, você já pode realizar o login.";
		}else{
			echo "Esse token já foi utilizado.";
		}
	}else{
		echo "O token expirou, por favor, realize o cadastro novamente.";
	}
	
} else{
	echo "Erro:O link de verificação parece estar incorreto.";
}
?>