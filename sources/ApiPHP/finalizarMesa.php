<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$mesa = addslashes($dadosrecebidos['mesa']);
$estab = addslashes($dadosrecebidos['estab']);
$valor = addslashes($dadosrecebidos['valor']);
$metodo = addslashes($dadosrecebidos['metodo']);
$apelido = addslashes($dadosrecebidos['apelido']);

try {
	$query = "SELECT user_id 
			  FROM table4al_table.usuarios 
			  WHERE user_mesa = '$mesa' ";

    $res = $pdo->query( $query );
	$rows = $res->fetchAll(PDO::FETCH_ASSOC );
	
    if ($rows != null){
		json_encode($rows);
   		$tamanho = count($rows);
      
    	for ($i = 0; $i < $tamanho; $i++ ){
        	$id = $rows[$i]['user_id']; 

        	$query = "
				INSERT INTO table4al_table.historico (
					hist_idusuario,
					hist_idmesa,
					hist_estab,
					hist_valor,
					hist_metodo,
					hist_apelido
				)
				VALUES(
					'$id',
					'$mesa',
					'$estab',
					'$valor',
					'$metodo',
					'$apelido'
				)
			";
			
			$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();
          
          
          	$query = "
				UPDATE table4al_table.usuarios
				SET table4al_table.usuarios.user_mesa = 0
				WHERE table4al_table.usuarios.user_mesa = '$mesa'
			";
          	$stmt = $pdo->prepare( $query );	
			$result = $stmt->execute();
        }				
	} 
	$query = "
			INSERT INTO table4al_table.historico (
				hist_idusuario,
				hist_idmesa,
				hist_estab,
				hist_valor,
				hist_metodo,
				hist_apelido
			)
			VALUES(
				'$estab',
				'$mesa',
				'$estab',
				'$valor',
				'$metodo',
				'$apelido'
			)
		";
		
		$stmt = $pdo->prepare( $query );	
		$result = $stmt->execute();	
		
  		$query = "
			UPDATE table4al_table.mesas
			SET table4al_table.mesas.mesa_ativo = 0
			WHERE table4al_table.mesas.mesa_id = '$mesa'
		";
		
		$stmt = $pdo->prepare( $query );	
		$result = $stmt->execute();	
		echo json_encode($result);
  
} catch(PDOException $e) {
	echo json_encode (false);
} 	 
?>