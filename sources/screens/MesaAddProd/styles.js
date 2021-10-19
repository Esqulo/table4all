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
    margin-top:20px;
    padding: 20px;
    width: 100%;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 5px;
`;


