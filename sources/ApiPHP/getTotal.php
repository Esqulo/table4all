<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);

	$query = "SELECT pedido_quantidade, prod_preco 
			  FROM table4al_table.pedidos 
			  INNER JOIN table4al_table.produtos  
			  ON table4al_table.pedidos.pedido_idproduto=table4al_table.produtos.prod_id 
			  WHERE pedido_idmesa = '$id'";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC ); //$rows = $res->fetchAll(PDO::FETCH_ASSOC ); pega todos








	echo json_encode($rows);	 	 
?>