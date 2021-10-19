import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
    padding: 40px;    

`;

export const NewTableButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 3%;
    z-index: 9;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;

export const LeaveTableButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 3%;
    z-index: 9;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;

export const CalcButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 15%;
    z-index: 9;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    margin-top: 25%;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    align-self: center;
    top: 7%;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30%;
`;

export const Mensagem = styled.Text`
    font-size: 16px;
    position: absolute;
    align-self: center;
    top: 12%;
    z-index: 9;
`;