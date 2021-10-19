import React, { useState, useEffect } from 'react';
import {useNavigation } from '@react-navigation/native';
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

import {
    AdMobBanner,
    AdMobInterstitial
} from 'expo-ads-admob'; 

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    useEffect  (() => {
        AdMobInterstitial.setAdUnitID('ca-app-pub-9791816249338036/2615179887');
        //teste: ca-app-pub-3940256099942544/1033173712
        //table4all: ca-app-pub-9791816249338036/2615179887
    },[]);;

    const showIntersticial = async () =>{
        await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }

    const [cod, setCod] = useState(''); 

    const ConfirmClick = async () =>{
        const user_id = await AsyncStorage.getItem('user_id');

        if (user_id != '0'){

            let res = await Api.MesaUsuario(user_id, cod);   

            if (res != false){
                showIntersticial();
                navigation.reset({routes:[{name:'MainTab'}]});
            }
            else{
                alert("Algo deu errado, por favor verifique o codigo tente novamente.");
            }
        }else{
            await AsyncStorage.setItem('mesa_guest', cod);
            navigation.reset({routes:[{name:'MainTab'}]});
        }
    }
    
    const voltarClick = () =>{
        navigation.goBack();
    }

    return (
        <Container>
            <SquareArea>
                <SquareText>Juntar-se à Mesa</SquareText>
                <InputArea><Input placeholderTextColor= "#22B573" placeholder= "Insira o código da mesa" onChangeText={t => setCod(t)} keyboardType="numeric"></Input></InputArea> 
            </SquareArea>
            <ConfirmButton onPress={ConfirmClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}