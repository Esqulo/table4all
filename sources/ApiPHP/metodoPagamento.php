<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$idmetodo = addslashes($dadosrecebidos['id']);

	$query ="
		SELECT metodo_desc
		FROM table4al_table.metodoDePagamento
		WHERE metodo_id = '$idmetodo'
	";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 	 
?>