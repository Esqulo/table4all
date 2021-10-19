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
    padding-horizontal: 20px;
    margin-top: 20px;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Titulo = styled.Text`
    margin-top: 35px;
    align-self: center;
    font-size: 22px;
    font-weight:bold;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const Mensagem = styled.Text`
    font-size: 22px;
    position: absolute;
    left 50%;
    top: 50%;
    z-index: 9;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 7%;
    z-index: 9;
`;