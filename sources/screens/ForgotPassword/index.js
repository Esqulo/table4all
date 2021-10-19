import React, { useState} from 'react';
import { Alert } from 'react-native';
import Api from '../../Api';
import Logo from '../../icons/logo.svg';
import Voltar from '../../icons/back.svg';
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtonText,
    ButtonVoltar,
    Titulo
} from './styles';

import SignInputEmail from '../../components/SignInputEmail';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');

    const backClick = () => {
        navigation.goBack();
    }

    const loginClick = async () =>{   
                                               
        if (emailField != ''){    
        
            let res = await Api.forgotPassword(emailField);  

            if (res == true){
                Alert.alert(
                    "Verifique seu e-mail",
                    "Foi enviado um e-mail com instruções para recuperação da sua senha.",
                    [
                        {
                            text: "Ok",
                            onPress: () => navigation.goBack(),
                            style: "default"
                        }
                    ]
                );
            } else{
                Alert.alert(
                    "E-mail inválido",
                    "Verifique o e-mail inserido e tente novamente.",
                    [
                      {
                        text: "Ok"
                      }
                    ]
                );
            }


        } else{
            Alert.alert(
                "Erro",
                "Insira o seu e-mail.",
                [
                  {
                    text: "Ok"
                  }
                ]
            );
        } 
    }


   
    return(
        <Container>
            <Titulo>Esqueci a senha</Titulo>
            <Logo width="100%" height ="130"></Logo>

            <InputArea>

                <SignInputEmail placeholder= "Insira seu e-mail" 
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <CustomButtom onPress={loginClick}>
                    <CustomButtonText>ENVIAR</CustomButtonText>
                </CustomButtom>

            </InputArea>
            <ButtonVoltar  onPress={backClick}> 
                <Voltar width="40" height ="40"/>
            </ButtonVoltar>
        </Container>
    );
}
