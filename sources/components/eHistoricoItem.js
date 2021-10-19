import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #22B573;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;  
`;

const Estab = styled.Text`
    font-size: 20px;
    font-weight:bold;
    padding-bottom: 15px;
`;

const Date = styled.Text`
    font-size: 17px;
`;

export default ({res}) =>{
    const navigation = useNavigation();

    const historicoClick = () => {
        navigation.navigate('DetailHist', {
            total: res.hist_valor,
            estab: res.hist_apelido,
            hdia: res.his_data,
            hmesa: res.hist_idmesa,
            hid: res.hist_id,
            metodo: res.hist_metodo
        });
    }

    return(
        <Area onPress={ historicoClick }>
            <Estab numberOfLines={1}>{res.hist_apelido}</Estab>
            <Date numberOfLines={1}>{res.his_data}</Date>
        </Area>
    );
}