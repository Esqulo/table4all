<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);
$id = addslashes($dadosrecebidos['id']);

	$query = "
    	SELECT hist_id, hist_valor, hist_metodo, hist_idmesa, user_nome, his_data 
    	FROM table4al_table.historico 
    	INNER JOIN table4al_table.usuarios on table4al_table.historico.hist_estab=table4al_table.usuarios.user_id 
    	WHERE table4al_table.historico.hist_idusuario = '$id' 
    	ORDER by his_data desc
    ";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 	 
?>