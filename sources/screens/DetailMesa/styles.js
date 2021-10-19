import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-bottom: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const TotalArea = styled.View`
    flex-direction: row;
    padding: 5px;
    justify-content: space-between;
    align-items: center;  
`;

export const VoltarButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: 9;
`;

export const TotalText = styled.Text`
    font-size: 17px;
    font-weight:bold;
`;

export const TotalAreaVerde = styled.View`
    background-color: #22B573;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    justify-content: space-between;
`;

export const Apelido = styled.Text`
    margin-top: 55px;
    font-size: 22px;
    font-weight:bold;
    align-self: center;
`;

export const Codigo = styled.Text`
    margin-top: 5px;
    align-self: center;
    font-size: 14px;
`;

export const EndButton = styled.TouchableOpacity`
    background-color: #b52205;
    margin-bottom: 20px;
    border-radius: 20px;
    height: 50px;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    padding: 10px;  
`;

export const AdicionarButton = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    border-radius: 20px;
    height: 50px;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    padding: 10px;  
`;

export const LockArea = styled.View`
    position: absolute;
    right: 20px;
    z-index: 9;
`;

export const EndButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight:bold;
`;

export const AdicionarButtonText = styled.Text`
    color: #000000;
    font-size: 17px;
    font-weight:bold;
`;

export const CalcButton = styled.TouchableOpacity`   
    position: absolute;
    right: 6%;
    bottom: 5%;
    z-index: 9;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: #22B573;
    border-radius: 40px;
`;