import React, {useState, useEffect} from 'react';
import { Text, Alert } from 'react-native';
import {useNavigation, useRoute } from '@react-navigation/native';
import Voltar from '../../icons/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProdutoList from '../../components/ProdutoList';
import {
    Container,
    VoltarButton,
    Titulo,
    LoadingIcon,
    Scroller
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [info, setInfo ] = useState({
        mesa: route.params.mesa
    });

    const [prodList, setProdList] = useState([]); //lista dos produtos do estabelecimento
    const [loading, setLoading] = useState(false);


    const getProdutos = async () => {
        setLoading(true);

        const user_id = await AsyncStorage.getItem('user_id');

        let json = await Api.getProdutos(user_id);            
       
        if (json != ''){
            setProdList(json);
        } else {
            setProdList("não há produtos");
        }            

        setLoading(false);
    
    }

    useEffect  (() => { 
        getProdutos();
    },[]);

    const voltarClick = () =>{
        navigation.goBack();
    }

    return (
        <Container>
            <Titulo>Adicionar Produtos</Titulo>
            <Scroller>
                {prodList.map((item, k)=>(
                    <ProdutoList key={k} json={item} mesa={info.mesa}/>
                ))}
                {loading &&
                    <LoadingIcon size="large" color="#22B573" />
                }
            </Scroller>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}