import React, { useState, useEffect } from 'react';
import { Text, RefreshControl } from 'react-native';
import BoxIcon from '../../icons/boxicon.svg';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import MesasItem from '../../components/MesasItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Container,
    NewTableButton,
    Titulo,
    Scroller,
    ListArea,
    LoadingIcon,
    ButtonTableText,
    ProdutosButton
} from './styles';


import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState (false);
    const [list, setList] = useState ([]);
  
    const novaMesa = async () =>{
        navigation.navigate('NovaMesa');
    }

    const goProdutos = async () =>{
        navigation.navigate('MeusProdutos');
    }

    const onRefresh = () =>{
        setRefreshing(false);
        getMesas();
    }
  
    const getMesas = async () =>{
        setLoading(true); 
        setList([]); 

        const user_id = await AsyncStorage.getItem('user_id');
        let res = await Api.getMesas(user_id);     

        if (res[0] != ''){
            setList(res);          
        } else {
            alert ("Nada Aqui");
        }

        setLoading(false);
    }
    useEffect( ()=>{
        getMesas();
    }, [isFocused]);

    return(
        <Container>
            <Titulo>Mesas</Titulo> 
            <Scroller refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <ListArea>
                    {list.map((item, k)=>(
                        <MesasItem key={k} res={item} />
                    ))}
                </ListArea>
                {loading &&
                    <LoadingIcon size="large" color="#22B573" />
                }
            </Scroller>
            <NewTableButton onPress={novaMesa}>
                <ButtonTableText>+</ButtonTableText>
            </NewTableButton>
            <ProdutosButton onPress={goProdutos}>
                <BoxIcon  width="40" height ="40"/>
            </ProdutosButton>
        </Container>
    );

}