<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$mesa = addslashes($dadosrecebidos['mesa']);

try {
	$query = "
    	SELECT mesa_pago 
		FROM table4al_table.mesas 
		WHERE mesa_id = '$mesa'
     ";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
	echo json_encode($rows);
    
} catch(PDOException $e) {
	echo json_encode (false);
} 	 
?>