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
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const SignupButtonText= styled.Text`
    font-size: 16px;
    color: #22B573;
`;

export const SignupButtonTextBold= styled.Text`
    font-size: 16px;
    color: #22B573;
    font-weight: bold;
`;

export const GuestButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const ForgotButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
`;

export const ForgotButtonTextBold= styled.Text`
    font-size: 16px;
    color: #22B573;
    font-weight: bold;
`;