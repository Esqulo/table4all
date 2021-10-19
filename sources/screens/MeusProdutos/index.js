import React, {useState, useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Voltar from '../../icons/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MeusProdutosList from '../../components/MeusProdutosList';
import {
    Container,
    VoltarButton,
    Titulo,
    Scroller,
    NewProdButton,
    ButtonProdText,
    LoadingIcon
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [prodList, setProdList] = useState([]);

    const [loading, setLoading] = useState(false);

    const getProdutos = async () => {
        setLoading(true);

        const user_id = await AsyncStorage.getItem('user_id');

        let res = await Api.getProdutos(user_id);            
        
        if (res != ''){
            setProdList(res);
        } else {
            setProdList([]);
        }            

        setLoading(false);
        
    }
    
    useEffect  (() => {    
        getProdutos();
    },[isFocused]);

    const voltarClick = () =>{
        navigation.goBack();
    }

    const novoProduto = () =>{
        navigation.navigate('NovoProduto');
    }

    return (
        <Container>
            <Titulo>Meus Produtos</Titulo>
            {loading ||
            <Scroller>
                {prodList.map((item, k)=>(
                    <MeusProdutosList key={k} res={item} />
                ))}
            </Scroller>
            }
            {loading &&
                <LoadingIcon size="large" color="#22B573" />
            }
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
            <NewProdButton onPress={novoProduto}>
                <ButtonProdText>+</ButtonProdText>
            </NewProdButton>
        </Container>
    );
}