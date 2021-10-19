import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Area = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    padding-horizontal: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
`;

const PriceArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;  
`;

const Quant = styled.Text`
    font-size: 20px;
    font-weight:bold;
`;

const Price = styled.Text`
    font-size: 20px;
    padding-right: 15px;
`;

const Descricao = styled.Text`
    font-size: 20px;
`;

export default ({json}) =>{
    return(
        <Area>
            <Descricao numberOfLines={1}>{json.prod_descricao}</Descricao>
            <PriceArea>
                <Price numberOfLines={1}>{json.pedido_valorUn}</Price>
                <Quant numberOfLines={1}><Text>x </Text>{json.pedido_quantidade}</Quant>
            </PriceArea>            
        </Area>
    );
}