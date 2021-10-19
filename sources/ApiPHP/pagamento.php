<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$valor = addslashes($dadosrecebidos['valor']);
$mesa = addslashes($dadosrecebidos['mesa']);

try {
	$query = "SELECT mesa_pago 
			 FROM table4al_table.mesas 
			 WHERE mesa_id = '$mesa' ";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
	json_encode($rows);
 
    $novoValor = $valor + $rows[mesa_pago];
	
	$query = "
			UPDATE table4al_table.mesas
			SET table4al_table.mesas.mesa_pago = '$novoValor'
			WHERE table4al_table.mesas.mesa_id = '$mesa'
		";

	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();	
	echo json_encode($result);
	
} catch(PDOException $e) {
	//$erro = 'Error: ' . $e->getMessage();
	echo json_encode (false);
} 	 
?>