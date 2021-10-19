<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$id_user = addslashes($dadosrecebidos['id']);
$mesa = addslashes($dadosrecebidos['mesa']);

try {
	
	$query = "
    	SELECT mesa_ativo 
		FROM table4al_table.mesas 
		WHERE table4al_table.mesas.mesa_id = '$mesa'
    ";
	
	$res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
  	
	
	if ($rows != ''){
		json_encode($rows);
		
		if($rows['mesa_ativo'] == '1'){ 
		
			$query = "
				UPDATE table4al_table.usuarios
				SET table4al_table.usuarios.user_mesa = $mesa
				WHERE table4al_table.usuarios.user_id = '$id_user'
			";
		
			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();	
			echo json_encode($result);
		}
	} else{
		echo json_encode(false);
	}
  
} catch(PDOException $e) {
	echo json_encode (false);
} 	
?>