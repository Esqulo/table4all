import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HistoricoItem from '../../components/eHistoricoItem';
import Voltar from '../../icons/back.svg';
import { 
    Container,
    Scroller,
    ListArea,
    LoadingIcon,
    Titulo,
    VoltarButton
} from './styles';


import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState (false);

    const getHistorico = async () =>{
        setLoading(true); 
        setList([]); 

        const user_id = await AsyncStorage.getItem('user_id');   
        let res = await Api.estabHistorico(user_id);      

        if (res[0] != ''){
            setList(res);          
        } else {
            alert ("Erro, tente novamente.");
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

            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );

}