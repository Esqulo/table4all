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
    padding: 40px;
    padding-bottom: -40px;
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
`;

export const ButtonVoltar = styled.TouchableOpacity`
    position: absolute;
    left: 5%;
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
    color: #22B573;
`;
