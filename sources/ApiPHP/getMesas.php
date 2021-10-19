<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);

	$query = "SELECT * FROM table4al_table.mesas WHERE mesa_estabelecimento = '$id' and mesa_ativo = '1' order by mesa_updated desc";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC ); //$rows = $res->fetchAll(PDO::FETCH_ASSOC ); pega todos

	echo json_encode($rows);	 	 
?>