import React, {useState, useEffect} from 'react';
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
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [info, setInfo ] = useState({
        campo: route.params.campo,
        atual: route.params.atual
    });

    const [senhaField, setSenhaField] = useState ('');

    const [valorField, setValorField] = useState ('');
    const [cValorField, setCValorField] = useState ('');

    const voltarClick = () =>{
        navigation.goBack();
    }

    const ConfirmClick = async () =>{
        if (valorField != '' && cValorField != '' && senhaField != ''){
            if (valorField == cValorField){

                const user_id = await AsyncStorage.getItem('user_id');

                let res = await Api.EditarSenha(user_id, info.campo, valorField, senhaField);   

                if (res != false){
                    Alert.alert(
                        "Sucesso!",
                        "Senha alterada.",
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
                        "Verifique a senha atual e tente novamente.",
                        [
                            {
                                text: "Ok",
                                style: "default"
                            }
                        ]
                    );
                }
            }else{
                Alert.alert(
                    "As senhas não conferem",
                    "Confirme as senhas e tente novamente.",
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
            <Titulo>Editar Senha</Titulo>
            <SquareArea>
                <InputArea>
                    <Input
                        placeholderTextColor= "#22B573"
                        placeholder= {info.atual} 
                        onChangeText={t => setValorField(t)}
                        secureTextEntry= {true}
                        value = {valorField}
                    />
                </InputArea>
                <InputArea>
                    <Input
                        placeholderTextColor= "#22B573"
                        placeholder= "Repita a nova senha" 
                        onChangeText={t => setCValorField(t)}
                        secureTextEntry= {true}
                        value = {cValorField}
                    />
                </InputArea>
            </SquareArea>
            <SenhaInputArea>
                <SenhaInput
                    placeholderTextColor= "#FFF"
                    placeholder= "Insira sua senha atual"
                    onChangeText={t => setSenhaField(t)}
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