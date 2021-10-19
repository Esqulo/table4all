import React, { useState, useContext} from 'react';
import {UserContext} from  '../../contexts/UserContext';
import Api from '../../Api';
import Logo from '../../icons/logo.svg';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtonText,
    SignupButton,
    ForgotButton,
    SignupButtonText,
    SignupButtonTextBold,
    ForgotButtonTextBold,
    GuestButton
} from './styles';

import SignInput from '../../components/SignInput';
import SignInputEmail from '../../components/SignInputEmail';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    

    const loginClick = async () =>{   
                                               
        if (emailField != '' && passwordField != ''){    
        
            let res = await Api.signIn(emailField, passwordField);  

            if (res.user_id){                                                      
                await AsyncStorage.setItem('user_email', res.user_email);
                await AsyncStorage.setItem('user_senha', res.user_senha);
                await AsyncStorage.setItem('user_id', res.user_id);
                await AsyncStorage.setItem('user_nome', res.user_nome);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.user_avatar
                    }
                });
                
            if(res.user_tipo == '0'){          
                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else {
                navigation.reset({
                    routes:[{name:'EMainTab'}]
                });
            }

            } else {
                alert ('Dados inválidos'); 
            }

        } else{
            alert("Prencha os campos!");
        } 
    }

    const newUserClick = () => {
        navigation.navigate('SignUp');
    }

    const forgotPass = () => {
        navigation.navigate('ForgotPassword');
    }

    const convidadoClick = async () => {
        await AsyncStorage.setItem('user_id', '0');
        await AsyncStorage.setItem('user_email', '0');
        
        navigation.reset({
            routes:[{name:'MainTab'}]
        });
    }
   
    return(
        <Container>
            <Logo width="100%" height ="160"></Logo>

            <InputArea>

                <SignInputEmail placeholder= "Insira seu e-mail" 
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <SignInput
                    placeholder= "Insira sua senha"
                    password = {true}
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                />

                <CustomButtom onPress={loginClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButtom>

                <ForgotButton onPress={forgotPass}>
                    <ForgotButtonTextBold>Esqueci a senha</ForgotButtonTextBold>
                </ForgotButton>
            </InputArea>
        
            <SignupButton onPress={newUserClick}>
                <SignupButtonText>Novo usuário? </SignupButtonText>
                <SignupButtonTextBold>Criar Conta</SignupButtonTextBold>
            </SignupButton>

            <GuestButton>
                <SignupButtonText>ou</SignupButtonText>
            </GuestButton>
            <GuestButton onPress={convidadoClick}>
                <SignupButtonTextBold>Entre como convidado</SignupButtonTextBold>
            </GuestButton>

        </Container>
    );
}
