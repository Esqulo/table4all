import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const TotalArea = styled.View`
    background-color: #22B573;
    flex-direction: row;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;  
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: 9;
`;

export const TotalText = styled.Text`
    font-size: 17px;
    font-weight:bold;
`;

export const Apelido = styled.Text`
    margin-top: 55px;
    font-size: 22px;
    font-weight:bold;
    align-self: center;
`;

export const Dia = styled.Text`
    margin-top: 5px;
    align-self: center;
    font-size: 14px;
`;

export const PagoEm = styled.Text`
    align-self: center;
    font-size: 18px;
    font-weight:bold;
`;

export const DeleteButton = styled.TouchableOpacity`
    background-color: #b52205;
    border-radius: 20px;
    width: 375px;
    height: 45px;
    align-items: center; 
    justify-content: center;
`;

export const DeleteButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #000000;
`;