<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);

	$query ="
		SELECT *
		FROM table4al_table.produtos
		WHERE prod_estab = '$id' and prod_ativo = '1'
        ORDER BY prod_descricao asc
    ";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 	 
?>