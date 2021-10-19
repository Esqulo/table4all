import React, {useState, useEffect, useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Voltar from '../../icons/back.svg';
import { Alert } from 'react-native';

import {
    Container,
    Campo,
    VoltarButton,
    SquareArea,
    ConfirmButton,
    ConfirmButtonText,
    Input,
    InputArea,
    Titulo,
    SenhaInput,
    SenhaInputArea
} from './styles';

import { TextInputMask } from 'react-native-masked-text';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const Phoneref = useRef(null);


    const [info, setInfo ] = useState({
        campo: route.params.campo,
        atual: route.params.atual
    });

    const [valor, setValor] = useState ('');
    const [senhaField, setSenhaFiled] = useState ('');

    const [tituloCampo, setTituloCampo] = useState ('');

    const voltarClick = () =>{
        navigation.goBack();
    }

    useEffect( ()=>{
        if(info.campo == "user_nome"){
            setTituloCampo("Nome");
        }
        if(info.campo == "user_email"){
            setTituloCampo("Email");
        }
        if(info.campo == "user_celular"){
            setTituloCampo("Celular");
        }
    },[]);

    const ConfirmClick = async () =>{
        if (valor != '' && senhaField != ''){
            const user_id = await AsyncStorage.getItem('user_id');
           
            let res;

            if(info.campo == "user_celular"){
                let unmask = Phoneref.current.getRawValue();
                res = await Api.EditarPerfil(user_id, info.campo, unmask, senhaField);
                console.log(unmask);
            }else{
                res = await Api.EditarPerfil(user_id, info.campo, valor, senhaField);  
            }
             

            if (res != false){
                Alert.alert(
                    "Sucesso!",
                    "Informação alterada.",
                    [
                        {
                            text: "Ok",
                            onPress: () => navigation.goBack(),
                            style: "default"
                        }
                    ]
                );
            }
            else{
                Alert.alert(
                    "Algo deu errado",
                    "Verifique a senha e tente novamente.",
                    [
                        {
                            text: "Ok",
                            style: "default"
                        }
                    ]
                );
            }
        }
        else{
            Alert.alert(
                "Erro!",
                "Preencha todos os campos.",
                [
                    {
                        text: "Ok",
                        style: "default"
                    }
                ]
            );
        }
    }

    return (
        <Container>
            <Titulo>Editar Informação</Titulo>
            <SquareArea>
                <Campo>{tituloCampo}</Campo>
                {info.campo == 'user_celular' ||
                    <InputArea>
                        <Input
                            placeholderTextColor= "#22B573"
                            placeholder= {info.atual} 
                            onChangeText={t => setValor(t)}
                            value = {valor}
                        />
                    </InputArea>
                }
                {info.campo == 'user_celular' &&
                    <InputArea>
                        <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }
                        }
                        placeholder = {info.atual} 
                        color = "#22B573"
                        fontSize= {20}
                        placeholderTextColor= "#22B573"
                        value = {valor}
                        onChangeText={t => setValor(t)}
                        keyboardType="numeric"
                        ref={Phoneref}
                    />
                    </InputArea>
                }
            </SquareArea>
            <SenhaInputArea>
                <SenhaInput
                    placeholderTextColor= "#FFF"
                    placeholder= "Insira sua senha"
                    onChangeText={t => setSenhaFiled(t)}
                    secureTextEntry= {true}
                    value = {senhaField}
                />
            </SenhaInputArea>
            <ConfirmButton onPress={ConfirmClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}