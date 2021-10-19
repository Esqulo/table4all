import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RefreshControl } from 'react-native';
import HistoricoItem from '../../components/HistoricoItem';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Voltar from '../../icons/back.svg';
import { 
    Container,
    Scroller,
    ListArea,
    LoadingIcon,
    Titulo,
    Mensagem,
    VoltarButton
} from './styles';

import Api from '../../Api';

export default () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    
    const [loading, setLoading] = useState(false);
    const [guest, setGuest] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState (false);

    const getHistorico = async () =>{
        setLoading(true); 
        setList([]); 

        const user_id = await AsyncStorage.getItem('user_id'); 
        
        if (user_id != '0'){
            let res = await Api.userHistorico(user_id);      

            if (res[0] != ''){
                setList(res);          
            } else {
                alert ("Erro");
            }
        } else{
            setGuest(true);
        }
        setLoading(false);
    }
    useEffect( ()=>{
        getHistorico();
    },[isFocused]);

    const voltarClick = () =>{
        navigation.goBack();
    }

    const onRefresh = () =>{
        setRefreshing(false);
        getHistorico();
    }
   
    return(
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Titulo>Histórico</Titulo> 
            <ListArea>
                {list.map((item, k)=>(
                    <HistoricoItem key={k} res={item} />
                ))}
            </ListArea>
                {loading &&
                    <LoadingIcon size="large" color="#22B573" />
                }
            </Scroller>
        {guest &&
            <Mensagem>Faça login para acessar o histórico</Mensagem>
        }

            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );

}