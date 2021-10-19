<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);
$apelido = addslashes($dadosrecebidos['apelido']);

if($apelido == ''){
  date_default_timezone_set('America/Sao_Paulo');
  $apelido = time();
  $apelido = date('d/m/y H:i:s ',$apelido);
}

try {
	$query = "
		INSERT INTO table4al_table.mesas (
			mesa_estabelecimento,
			mesa_apelido
		)VALUES (
			'$id',
			'$apelido'
		)
	";

	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();	
	$lastid = $pdo->lastInsertId();
	echo json_encode($lastid);
	
} catch(PDOException $e) {
	//$erro = 'Error: ' . $e->getMessage();
	echo json_encode (false);
} 	 
?>