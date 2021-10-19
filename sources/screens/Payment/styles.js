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

export const PrinceInputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #22B573;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
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

export const SquareAreaRadio = styled.View`
    background-color: #22B573;
    flex-direction: column;
    width: 375px;
    height: 110px;
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

export const FinishButton = styled.TouchableOpacity`
    background-color: #b52205;
    border-radius: 20px;
    width: 375px;
    height: 45px;
    align-items: center; 
    justify-content: center;
    margin-top: 20px;
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

export const FinishButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #FFFFFF;
`;

export const AvisoText = styled.Text`
    margin-top: 3px;
    font-size: 11px;
    color: #000000;
`;

export const RadioArea = styled.SafeAreaView`
    width: 100%;
    flexDirection: row;
    align-items: center;
    justify-content: center;    
`;
export const RadioText = styled.Text`
    fontSize: 20px;
    color: #FFF;
    padding-right: 10px;
`;