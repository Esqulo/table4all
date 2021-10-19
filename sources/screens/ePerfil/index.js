import React, { useState, useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { 
    Container,
    LogoutButton,
    LogoutButtonText,
    Titulo,
    CampoText,
    ValorCampoText,
    InfoArea,
    CampoArea,
    CampoAreas,
    LoadingIcon,
    Mensagem,
    BannerArea
} from './styles';
import Api from '../../Api';

import {
    AdMobBanner,
    AdMobInterstitial
} from 'expo-ads-admob'; 

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [loading, setLoading] = useState(true);
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const getPerfil = async () =>{
        
        setLoading(true);  

        const user_id = await AsyncStorage.getItem('user_id');   
        let res = await Api.GetPerfil(user_id);      
        
        if (res != false){
            setNome(res.user_nome);
            setEmail(res.user_email);    
            setCelular(res.user_celular); 
        } else {
            alert ("Erro, tente novamente.");
        }
        
        setLoading(false);
    }

    useEffect( ()=>{
        getPerfil();
    },[isFocused]);
    
    const LogOut = async () => {
        await AsyncStorage.removeItem('user_id');
        await AsyncStorage.removeItem('user_senha');
        await AsyncStorage.removeItem('user_email');
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    const editClick = async (nomeCampo, valorAtual) => {
        navigation.navigate('EditarPerfil', {campo: nomeCampo, atual:valorAtual});
    }

    const senhaClick = async (nomeCampo) => {
        navigation.navigate('EditarSenha', {campo: nomeCampo, atual:'Insira a nova senha'});
    }

    const naoEdita = async () => {
        Alert.alert(
            "Impossível editar",
            "Não é possível alterar este campo.",
            [
                {
                    text: "Ok",
                    style: "default"
                }
            ]
        );
    }
    
    return(
        <Container>
            <Titulo>Meu Perfil</Titulo>
            <Mensagem numberOfLines={1}>Toque a informação para alterar</Mensagem>
        {loading ||
            <InfoArea>
                <CampoArea onPress={ naoEdita }>
                    <CampoText numberOfLines={1}>Nome: </CampoText>
                    <ValorCampoText numberOfLines={1}> {nome} </ValorCampoText>
                </CampoArea>

                <CampoArea onPress={ () => editClick('user_email', email) }>
                    <CampoText numberOfLines={1}>Email: </CampoText>
                    <ValorCampoText numberOfLines={1}> {email} </ValorCampoText>
                </CampoArea>

                <CampoArea onPress={ () => editClick('user_celular', celular) } >
                    <CampoText numberOfLines={1}>Celular: </CampoText>
                    <ValorCampoText numberOfLines={1}> {celular} </ValorCampoText>
                </CampoArea>

                <CampoAreas onPress={ () => senhaClick('user_senha') }>
                    <CampoText numberOfLines={1}>Alterar senha </CampoText>
                </CampoAreas>

            </InfoArea>
        }  
        {loading &&
            <LoadingIcon size="large" color="#22B573" />
        }
        {loading ||
            <LogoutButton onPress={LogOut}>
                    <LogoutButtonText>LogOut</LogoutButtonText>
            </LogoutButton>
        }
        {loading ||
            <BannerArea>
                <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-9791816249338036/1858014870"
                        servePersonalizedAds
                        onDidFailToReceiveAdWithError={(err) => console.log(err)} 
                /> 
            </BannerArea>
        }
        </Container>
    );
}