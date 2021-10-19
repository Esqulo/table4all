import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    align-self: center;
    top: 7%;
    z-index: 9;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 7%;
    z-index: 9;
`;

export const Campo = styled.Text`
    font-size: 22px;
    font-weight:bold;
`;

export const SquareArea = styled.View`
    background-color: #22B573;
    flex-direction: column;
    width: 375px;
    height: 165px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;  
`;

export const ConfirmButton = styled.TouchableOpacity`
    background-color: #22b573;
    border-radius: 40px;
    width: 375px;
    height: 55px;
    align-items: center; 
    justify-content: center;
    margin-top: 20px;
`;

export const ConfirmButtonText = styled.Text`
    font-size: 22px;
    font-weight:bold;
    color: #FFFFFF;
`;

export const InputArea = styled.View `
    background-color: #FFFFFF;
    width: 300px;
    height: 60px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput `
    font-size: 20px;
    color: #22B573
    background-color: #FFF;
    flex: 1;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const SenhaInput = styled.TextInput `
    font-size: 20px;
    color: #FFF;
    background-color: #22B573;
    flex: 1;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const SenhaInputArea = styled.View `
    background-color: #22B573;
    width: 370px;
    height: 60px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

