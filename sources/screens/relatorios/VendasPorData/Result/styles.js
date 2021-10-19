import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-horizontal: 5%;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 7%;
    z-index: 9;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    align-self: center;
    top: 7%;
    z-index: 9;
`;

export const InfoAreaw = styled.View`
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 60px;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
`;

export const InfoTitleg = styled.Text`
    margin-left: 5%;
    font-size: 20px;
    font-weight:bold;
    color: #22b573;
`;

export const InfoContentg = styled.Text`
    margin-right: 5%;
    font-size: 20px;
    color: #22b573;
`;

export const InfoAreag = styled.View`
    flex-direction: row;
    background-color: #22b573;
    border-radius: 60px;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
`;

export const InfoTitlew = styled.Text`
    margin-left: 5%;
    font-size: 20px;
    font-weight:bold;
    color: #FFF;
`;

export const InfoContentw = styled.Text`
    margin-right: 5%;
    font-size: 20px;
    color: #FFF;
`;