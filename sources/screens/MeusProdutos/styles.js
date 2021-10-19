import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    align-items: center;
`;

export const Titulo = styled.Text`
    margin-top: 55px;
    font-size: 22px;
    font-weight:bold;
    align-self: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    margin-top: 20px;
    padding-horizontal: 20px;
    width: 100%;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: 9;
`;

export const NewProdButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 3%;
    z-index: 9;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;

export const ButtonProdText = styled.Text`
    font-size: 60px;
    padding-bottom: 7px;
    font-weight: bold;
    align-self: center;
    color: #FFFFFF;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 15%;
`;