<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$descricao = addslashes($dadosrecebidos['descricao']);
$preco = addslashes($dadosrecebidos['preco']);
$usuario = addslashes($dadosrecebidos['usuario']);
$tipoPreco = addslashes($dadosrecebidos['tipoPreco']);

if($tipoPreco == '1'){
	$preco = '0';
}

try {
	
	$query = "
		INSERT INTO table4al_table.produtos (
			prod_descricao,
			prod_preco,
            prod_tipoPreco,
			prod_estab
		)
		VALUES(
			'$descricao',
			'$preco',
            '$tipoPreco'
			'$usuario'
		)
	";

	$stmt = $pdo->prepare( $query );	
	$result = $stmt->execute();	
	echo json_encode($result);	
} catch(PDOException $e) {
	//$erro = 'Error: ' . $e->getMessage();
	echo json_encode (false);
} 	 
?>