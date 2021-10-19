<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$email = addslashes($dadosrecebidos['email']);
$senha = md5($dadosrecebidos['senha']);

	$query = "
		SELECT * 
		FROM table4al_table.usuarios 
		WHERE user_email = '$email' AND user_senha = '$senha' AND user_claimemail= '1'
	";

	$res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 
?>