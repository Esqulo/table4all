import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`;

export const InfoArea = styled.View`
    margin-top: 150px;
    margin-bottom: 30px;
`;

export const InputArea = styled.SafeAreaView`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 150px;
    padding-top: 10px;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    align-self: center;
    top: 7%;
    z-index: 9;
`;

export const LogoutButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #b52205;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const BannerArea = styled.SafeAreaView`
    position: absolute;
    align-self: center;
    bottom: -1px;
    z-index: 9;
    width: 100%;
    justify-content: center;
    background-color: #D3D3D3;
`;

export const LogoutButtonText = styled.Text`
    font-size: 18px;
    color:#000000
    padding-horizontal: 40px;
`;

export const CampoArea = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    padding: 5px;
    height: 60px;
    width: 370px;
    border-radius: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
`;

export const CampoAreas = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    padding: 5px;
    height: 60px;
    width: 370px;
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
`;

export const CampoText = styled.Text`
    font-size: 18px;
    margin-left: 15px;
    font-weight: bold;
    max-width: 65%;
    color: #000;
`;

export const ValorCampoText = styled.Text`
    font-size: 18px;
    margin-right: 15px;
    color: #000;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const Mensagem = styled.Text`
    font-size: 17px;
    position: absolute;
    align-self: center;
    top: 11.5%;
    z-index: 9;
`;