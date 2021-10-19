<?php
include_once('conexao.php'); 

$dadosrecebidos = json_decode(file_get_contents("php://input"),true);

$estab = addslashes($dadosrecebidos['id']);
$dia = addslashes($dadosrecebidos['dia']);
$mes = addslashes($dadosrecebidos['mes']);
$ano = addslashes($dadosrecebidos['ano']);

  if($dia==='1'){
      $dia = '01';
  }
  if($dia==='2'){
      $dia = '02';
  }
  if($dia==='3'){
      $dia = '03';
  }
  if($dia==='4'){
      $dia = '04';
  }
  if($dia==='5'){
      $dia = '05';
  }
  if($dia==='6'){
      $dia = '06';
  }
  if($dia==='7'){
      $dia = '07';
  }
  if($dia==='8'){
      $dia = '08';
  }
  if($dia==='9'){
      $dia = '09';
  }
//============
  if($mes==='1'){
      $mes = '01';
  }
  if($mes==='2'){
      $mes = '02';
  }
  if($mes==='3'){
      $mes = '03';
  }
  if($mes==='4'){
      $mes = '04';
  }
  if($mes==='5'){
      $mes = '05';
  }
  if($mes==='6'){
      $mes = '06';
  }
  if($mes==='7'){
      $mes = '07';
  }
  if($mes==='8'){
      $mes = '08';
  }
  if($mes==='9'){
      $mes = '09';
  }
	$query =" SELECT 
				(SELECT 
					MAX(hist_valor) 
					FROM table4al_table.historico
					WHERE table4al_table.historico.his_data 
					LIKE '$ano-$mes-$dia%' 
					AND hist_estab = '$estab' 
					AND hist_idusuario = '$estab'
				) AS Maior, 
				(SELECT 
					MIN(hist_valor) 
					FROM table4al_table.historico
					WHERE table4al_table.historico.his_data 
					LIKE '$ano-$mes-$dia%' 
					AND hist_estab = '$estab' 
					AND hist_idusuario = '$estab'
				) AS Menor, 
				(SELECT 
					COUNT(hist_id) 
					FROM table4al_table.historico 
					WHERE table4al_table.historico.his_data 
					LIKE '$ano-$mes-$dia%' 
					AND hist_estab = '$estab' 
					AND hist_idusuario = '$estab'
				) As Quant, 
				(SELECT 
					SUM(hist_valor) 
					FROM table4al_table.historico 
					WHERE table4al_table.historico.his_data 
					LIKE '$ano-$mes-$dia%' 
					AND hist_estab = '$estab' 
					AND hist_idusuario = '$estab' 
				) AS Total,
				(SELECT 
					AVG(hist_valor) 
					FROM table4al_table.historico 
					WHERE table4al_table.historico.his_data 
					LIKE '$ano-$mes-$dia%' 
					AND hist_estab = '$estab' 
					AND hist_idusuario = '$estab' 
				) AS Media
	";

    $res = $pdo->query( $query );
	$rows = $res->fetch(PDO::FETCH_ASSOC );

	echo json_encode($rows);	 	 
?>