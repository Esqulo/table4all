import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import Voltar from '../../../../icons/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import {
    Container,
    LoadingIcon,
    VoltarButton,
    Titulo,
    InfoTitleg,
    InfoContentg,
    InfoAreaw,
    InfoAreag,
    InfoTitlew,
    InfoContentw
} from './styles';
import Api from '../../../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [loading, setLoading] = useState(true);

    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);
    const [total, setTotal] = useState(0);
    const [media, setMedia] = useState(0);
    const [quant, setQuant] = useState(0);


    const [info, setInfo ] = useState({
        ano: route.params.ano,
        mes: route.params.mes,
        dia: route.params.dia
    });

    const voltarClick = () =>{
        navigation.goBack();
    }    

    const getDetail = async () => {
        setLoading(true);

        const user_id = await AsyncStorage.getItem('user_id'); 
       
        let res = await Api.detalhePorData(user_id, info.dia, info.mes, info.ano);

        if (res.Quant != '0'){
            setMaior(res.Maior);
            setMenor(res.Menor);
            setMedia(res.Media);
            setTotal(res.Total);
            setQuant(res.Quant);
        }else{
            setMaior('0');
            setMenor('0');
            setMedia('0');
            setTotal('0');
            setQuant('0');
            Alert.alert(
                "Aviso",
                "Você não possui dados para esta data.",
                [
                  {
                    text: "Fechar"
                  }
                ]
            );
        }


        setLoading(false);
    }

    useEffect  (() => {
        getDetail();

    },[]);
    

    return (
        <Container>
            <Titulo>{info.dia}/{info.mes}/{info.ano}</Titulo>
            {loading ||
                <InfoAreag>
                    <InfoTitlew>Venda Total:</InfoTitlew>
                    <InfoContentw>R$ {total}</InfoContentw>
                </InfoAreag>
            }
            {loading ||
            <InfoAreaw>
                <InfoTitleg>Numero de mesas:</InfoTitleg>
                <InfoContentg>{quant}</InfoContentg>
            </InfoAreaw>
            }
            {loading ||
                <InfoAreag>
                    <InfoTitlew>Maior venda do dia:</InfoTitlew>
                    <InfoContentw>R$ {maior}</InfoContentw>
                </InfoAreag>
            }
            {loading ||
                <InfoAreaw>
                    <InfoTitleg>Menor venda do dia:</InfoTitleg>
                    <InfoContentg>R$ {menor}</InfoContentg>
                </InfoAreaw>
            }
            {loading ||
                <InfoAreag>
                    <InfoTitlew>Média do dia:</InfoTitlew>
                    <InfoContentw>R$ {parseFloat(media).toFixed(2)}</InfoContentw>
                </InfoAreag>
            }
            {loading &&
                <LoadingIcon size="large" color="#22B573" />
            }
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}