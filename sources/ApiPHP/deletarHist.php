<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$id = addslashes($dadosrecebidos['id']);

try { 
	$query = "
		DELETE FROM table4al_table.historico
		WHERE table4al_table.historico.hist_id = '$id'
	";

	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();			
	echo json_encode($result);
	
} catch(PDOException $e) {
	echo json_encode (false);
} 	 
?>