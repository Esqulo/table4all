import React from 'react';
import styled from 'styled-components/native';

import { TextInputMask } from 'react-native-masked-text';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #22B573;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
/*
const Input = styled.TextInput `
    flex: 1;
    font-size 16px;
    color: #FFF;
    margin-left 10px;
`;
*/
export default ({placeholder, password, value, onChangeText}) => {

    return (

        //inserir imagem ícone 1:21
        <InputArea>
            <TextInputMask
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }
                }
                placeholder={placeholder}
                color = "#FFF"
                placeholderTextColor= "#FFF"
                value={value}
                secureTextEntry= {password}
                onChangeText={onChangeText}
                keyboardType="numeric"
            />
        </InputArea>
    );
    
}