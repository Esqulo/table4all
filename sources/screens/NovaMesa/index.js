import React, {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import {useNavigation, useRoute } from '@react-navigation/native';
import Voltar from '../../icons/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    VoltarButton,
    SquareArea,
    SquareText,
    Input,
    ConfirmButton,
    ConfirmButtonText,
    InputArea
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const [apelido, setApelido] = useState(''); 

    const NovoClick = async () =>{
        const user_id = await AsyncStorage.getItem('user_id');

        let res = await Api.novaMesa(user_id, apelido);   

        if (res != false){
            Alert.alert(
                "Mesa inserida com sucesso",
                "Código da mesa: "+res,
                [
                  {
                    text: "Ok",
                    onPress: () => navigation.reset({
                        routes:[{name:'EMainTab'}]
                    }),
                    style: "default"
                  }
                ]
              );
        }
        else{
            alert("Algo deu errado, por favor tente novamente");
        }

    }
    
    const voltarClick = () =>{
        navigation.goBack();
    }

    return (
        <Container>
            <SquareArea>
                <SquareText>Nova Mesa</SquareText>
               <InputArea><Input placeholderTextColor= "#22B573" placeholder= "Insira um apelido (opcional)" onChangeText={t => setApelido(t)}></Input></InputArea> 
            </SquareArea>
            <ConfirmButton onPress={NovoClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}