<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);

	$query = "
    	SELECT mesa_ativo 
		FROM table4al_table.mesas 
		WHERE table4al_table.mesas.mesa_id = '$id'
    ";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );
	
	
	if ($rows != null){
		json_encode($rows);
		
		if($rows['mesa_ativo'] == '1'){ 
		
			$query = "
				SELECT prod_descricao, pedido_quantidade, prod_preco 
				FROM table4al_table.pedidos 
				INNER JOIN table4al_table.produtos on table4al_table.pedidos.pedido_idproduto=table4al_table.produtos.prod_id 
				WHERE table4al_table.pedidos.pedido_idmesa = '$id'
			 ";

			$res = $pdo->query( $query );
			$rows = $res->fetchAll(PDO::FETCH_ASSOC ); 
			echo json_encode($rows);
		} else{
			echo json_encode(false);
        }
	}	 	 
?>