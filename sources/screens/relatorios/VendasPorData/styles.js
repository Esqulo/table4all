import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.Text`
    position: absolute;
    top: 7%;
    z-index: 9;    
    align-self: center;
    font-size: 22px;
    font-weight:bold;
`;

export const SquareTitle = styled.Text`
    align-self: center;    
    color: #FFF;
    font-size: 20px;
    font-weight:bold;
`;

export const DayItem = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    width: 25%;
    height: 60px;
    border-radius: 20px;
    padding: 15px;
    justify-content: center;
    align-items: center;  
`;

export const MonthItem = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    width: 25%;
    height: 60px;
    border-radius: 20px;
    padding: 15px;
    justify-content: center;
    align-items: center;  
`;

export const YearItem = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    width: 35%;
    height: 60px;
    border-radius: 20px;
    padding: 15px;
    justify-content: center;
    align-items: center;  
`;


export const NomeCampo = styled.Text`
    font-size: 20px;
    font-weight:bold;
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 7%;
    z-index: 9;
`;

export const ConfirmButton = styled.TouchableOpacity`
    background-color: #22b573;
    border-radius: 20px;
    width: 375px;
    height: 45px;
    align-items: center; 
    justify-content: center;
`;

export const ConfirmButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #FFFFFF;
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

export const Input = styled.TextInput `
    font-size: 20px;
    color: #22B573
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    margin-top: 3px;
    flex-direction: row;
    padding: 15px;
    width 375px;
    justify-content: space-between;
    align-items: center;  
`;