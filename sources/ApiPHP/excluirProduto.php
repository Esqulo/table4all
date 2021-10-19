<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$prod_id = addslashes($dadosrecebidos['prod_id']);

try {
	
	$query = "
		UPDATE table4al_table.produtos
		SET table4al_table.produtos.prod_ativo = '0'
		WHERE table4al_table.produtos.prod_id = '$prod_id'
	";
			
	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();
    echo json_encode($result);   
	
} catch(PDOException $e) {
	echo json_encode (false);
} 	 
?>