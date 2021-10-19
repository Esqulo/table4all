import React from 'react';
import styled from 'styled-components/native';

export const Titulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    align-self: center;
    top: 7%;
    z-index: 9;
`;

export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`;

export const Input = styled.TextInput `
    font-size: 16px;
    color: #22B573
    background-color: #FFF;
    flex: 1;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View `
    background-color: #FFFFFF;
    width: 300px;
    height: 60px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const SquareArea = styled.View`
    background-color: #22B573;
    flex-direction: column;
    width: 375px;
    height: 150px;
    margin-bottom: 20px;
    margin-top: 100px;
    border-radius: 20px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;  
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 7%;
    z-index: 9;
`;

export const SquareText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #FFFFFF;
`;

export const CalcTitle = styled.Text`
    font-size: 15px;
    font-weight:bold;
    color: #000000;
`;

export const CalcText = styled.Text`
    font-size: 20px;
    color: #000000;
`;

export const CalcArea = styled.View `
    padding: 20px;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CalcContent = styled.View `
    padding-horizontal: 20px;
    padding-vertical: 5px;
    width: 375px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const Mensagem = styled.Text`
    font-size: 11px;
    position: absolute;
    align-self: center;
    top: 12%;
    z-index: 9;
`;