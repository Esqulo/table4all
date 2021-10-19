import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
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

export const ConfirmButton = styled.TouchableOpacity`
    background-color: #22B573;
    border-radius: 20px;
    width: 375px;
    height: 45px;
    align-items: center; 
    justify-content: center;
`;

export const SquareText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #FFFFFF;
`;

export const ConfirmButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #FFFFFF;
`;