<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$user_id = addslashes($dadosrecebidos['user_id']);
$campo = addslashes($dadosrecebidos['campo']);
$valorCampo = addslashes($dadosrecebidos['valorCampo']);
$senha = md5($dadosrecebidos['senha']);

try {
	
	$query = "
		SELECT user_id 
		FROM table4al_table.usuarios 
		WHERE user_id = '$user_id' AND user_senha = '$senha'
	";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
	
	if ($rows != false){
		$query = "
			UPDATE table4al_table.usuarios
			SET table4al_table.usuarios.$campo = '$valorCampo'
			WHERE table4al_table.usuarios.user_id = '$user_id'
		";
				
		$stmt = $pdo->prepare( $query );	
		$result = $stmt->execute();
		echo json_encode($result);		
	}
	else{
		echo json_encode (false);
	}	
} catch(PDOException $e) {
	echo json_encode (false);
} 	 
?>