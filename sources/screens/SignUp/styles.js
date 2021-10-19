import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    padding-top: 20%;
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const InputArea = styled.SafeAreaView`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
`;

export const PhoneInputArea = styled.View`
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
`;

export const SignupButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const ButtonVoltar = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: 9;
`;

export const RadioArea = styled.SafeAreaView`
    width: 100%;
    flexDirection: row;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    
`;
export const RadioText = styled.Text`
    fontSize: 20px;
    color: #22B573;
    padding-right: 10px;
`;