import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

const Apelido = styled.Text`
    font-size: 20px;
    font-weight:bold;
    padding-bottom: 15px;
`;

const Idmesa = styled.Text` 
    font-size: 17px;
`;

export default ({res}) =>{
    const navigation = useNavigation();

    const mesaClick = () => {
        navigation.navigate('DetailMesa', {apelido: res.mesa_apelido, mesa: res.mesa_id});
    }

    return(
        <Area onPress={ mesaClick }>
            <Apelido numberOfLines={1}>{res.mesa_apelido}</Apelido>
            <Idmesa numberOfLines={1}>cod: {res.mesa_id}</Idmesa>
        </Area>
    );
}