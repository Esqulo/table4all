import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;    
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    margin-top: 20px;
    padding-horizontal: 20px;
    width: 100%;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Titulo = styled.Text`
    margin-top: 35px;
    align-self: center;
    font-size: 22px;
    font-weight:bold;
`;

export const RelItem = styled.TouchableOpacity`
    background-color: #22B573;
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

export const NomeCampo = styled.Text`
    font-size: 20px;
    font-weight:bold;
`;