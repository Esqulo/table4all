<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$idprod = addslashes($dadosrecebidos['idprod']);
$mesa = addslashes($dadosrecebidos['mesa']);
$quant = addslashes($dadosrecebidos['quant']);
$tipo = addslashes($dadosrecebidos['tipo']);


if($tipo == '0'){
	try {
		$query = "SELECT * 
				 FROM table4al_table.pedidos 
				 WHERE pedido_idmesa = '$mesa' AND pedido_idproduto = '$idprod'";

		$res = $pdo->query( $query );
		$rows = $res->fetch(PDO::FETCH_ASSOC );
		
		if ($rows != false){
			json_encode($rows);
			$id_pedido = $rows["pedido_id"];
			$quantnova = $rows["pedido_quantidade"] + $quant ;

			$query = "
				UPDATE table4al_table.pedidos
				SET table4al_table.pedidos.pedido_quantidade = '$quantnova'
				WHERE table4al_table.pedidos.pedido_id = '$id_pedido'
			";
			
			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();	
			echo json_encode($result);
			
		} else {		
			$query = "
				SELECT * 
				FROM table4al_table.produtos 
				WHERE prod_id = '$idprod'
			";

			$res = $pdo->query( $query );
			$rows = $res->fetch(PDO::FETCH_ASSOC );	
			
			$unidade = $rows["prod_preco"];
			
			$query = "
				INSERT INTO
					table4al_table.pedidos (
						pedido_idmesa,
						pedido_idproduto,
						pedido_quantidade,
						pedido_valorUn
					)
					VALUES(
						'$mesa',
						'$idprod',
						'$quant',
						'$unidade'
					)
			";

			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();	
			echo json_encode($result);
		}
	} catch(PDOException $e) {
		//$erro = 'Error: ' . $e->getMessage();
		echo json_encode (false);
	} 	 
}
if($tipo == '1'){
	
	try {		
		$query = "
			INSERT INTO
				table4al_table.pedidos (
					pedido_idmesa,
					pedido_idproduto,
					pedido_quantidade,
					pedido_valorUn
				)
				VALUES(
					'$mesa',
					'$idprod',
					'1',
					'$quant'
				)
		";

		$stmt = $pdo->prepare( $query );	
		$result = $stmt->execute();	
		echo json_encode($result);
	}catch(PDOException $e) {
		//$erro = 'Error: ' . $e->getMessage();
		echo json_encode (false);
	} 	 
}
?>