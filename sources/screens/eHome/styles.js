import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    margin-top: 20px;
    padding-horizontal: 20px;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-bottom: 30px;
    width: 100%;
    align-items: center;
`;

export const Titulo = styled.Text`
    margin-top: 55px;
    font-size: 22px;
    font-weight:bold;
`;

export const ButtonTableText = styled.Text`
    font-size: 60px;
    padding-bottom: 7px;
    font-weight: bold;
    align-self: center;
    color: #FFFFFF;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 5px;
`;

export const NewTableButton = styled.TouchableOpacity`   
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

export const ProdutosButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 15%;
    z-index: 9;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;

