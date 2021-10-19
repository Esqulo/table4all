import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.SafeAreaView`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
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

export const CustomButtom = styled.TouchableOpacity`
    height: 60px;
    background-color: #22B573;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color:#FFF
    font-weight: bold;
`;

export const ButtonVoltar = styled.TouchableOpacity`
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

export const RadioArea = styled.SafeAreaView`
    width: 70%;
    flexDirection: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    
`;

export const RadioText = styled.Text`
    fontSize: 20px;
    color: #22B573;
`;

export const RadioCell = styled.SafeAreaView`
    flexDirection: row;
    align-items: center;
    justify-content: center;
`;

export const RadioTitulo = styled.Text`
    margin-bottom: -50px;
    font-size: 22px;
    color: #22B573;
    font-weight: bold;
    align-self: center;
`;