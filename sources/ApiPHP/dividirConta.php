<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$idMesa = addslashes($dadosrecebidos['idMesa']);

try{
	$query = "
		SELECT user_id 
		FROM table4al_table.usuarios
		WHERE user_mesa = '$idMesa'
	";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC );
	
	$tamanho = count($rows);
	
	if ($tamanho > 0){
		echo json_encode($tamanho);
	}
	else{
		echo json_encode(false);
	}
	
} catch (PDOException $e) {
	echo json_encode (false);
} 	
?>