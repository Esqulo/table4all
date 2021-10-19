import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    padding: 5px;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
`;

const Descricao = styled.Text`
    font-size: 18px;
    margin-left: 15px;
    font-weight: bold;
    max-width: 65%;
    color: #000;
`;

const Preco = styled.Text`
    font-size: 18px;
    margin-right: 15px;
    color: #000;
`;

export default ({json, mesa}) =>{
    const navigation = useNavigation();

    const produtoClick = () => {
        navigation.navigate('AddSelected', {idprod: json.prod_id, desc: json.prod_descricao, idmesa: mesa, tipo: json.prod_tipoPreco});
    }

    return(
        <Area onPress={ produtoClick }>
            <Descricao numberOfLines={1}>{json.prod_descricao}</Descricao>
            <Preco numberOfLines={1}>R$ {json.prod_preco}</Preco>
        </Area>
    );
}