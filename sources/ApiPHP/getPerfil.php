<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$id = addslashes($dadosrecebidos['id']);

	$query ="
		SELECT *
		FROM table4al_table.usuarios
		WHERE user_id = '$id'
	";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 	 
?>