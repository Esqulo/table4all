<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$email = addslashes($dadosrecebidos['email']);
$senha = addslashes($dadosrecebidos['senha']);

	$query = "SELECT * FROM table4al_table.usuarios WHERE user_email = '$email' and user_senha = '$senha'";

	$res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC ); //$rows = $res->fetchAll(PDO::FETCH_ASSOC ); pega todos

	echo json_encode($rows);	 
?>