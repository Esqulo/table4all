import React, { useState, useEffect } from 'react';
import {RefreshControl } from 'react-native';
import ProdutoItem from '../../components/ProdutoItem';
import Logob from '../../icons/logob.svg';
import Calc from '../../icons/calc.svg';
import Door from '../../icons/door.svg';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Container,
    Scroller,
    ListArea,
    LoadingIcon,
    Titulo,
    Mensagem,
    NewTableButton,
    LeaveTableButton,
    CalcButton
} from './styles';
/*
import {
    AdMobBanner,
    AdMobInterstitial
} from 'expo-ads-admob'; 
*/
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    
    const [loading, setLoading] = useState(false);

    const [prodList, setProdList] = useState([])
    const [onTable, setOnTable] = useState (false);
    const [refreshing, setRefreshing] = useState (false);
    const [mesa, setMesa] = useState ('');

    const getDetail = async () => {
        setLoading(true);
        setProdList([]);

        let user_id = await AsyncStorage.getItem('user_id'); //resgata o id do usuário na memória
        
        if (user_id != '0'){ //caso o usuário esteja logado
            let res = await Api.GetPerfil(user_id);     // vai ao banco de dados e verifica os dados do usuário
            if(res.user_mesa != '0' && res.user_mesa != false){ //caso o usuário tenha uma mesa diferente de 0 (default)
                let json = await Api.MesaAtiva(res.user_mesa); //verifica se a mesa é válida, caso positivo, devolve os dados
                
                setMesa(res.user_mesa); //salva o número da mesa localmente em uma variável de exibição

                if (json[0] != ''){ // se a mesa possuir dados
                    setProdList(json); //cria uma lista com os dados
                    setOnTable(true); // o sistema considera o usuário em uma mesa
                }else { // se a mesa não possuir dados
                    setOnTable(false); //o sistema não considera o usuário em uma mesa
                    alert ("Desculpe. Algo deu errado."); // feedback
                }
            }else { // caso a mesa seja inválida ou 0 (default)
                setOnTable(false); // não interpreta o número
            }
        }else { //Caso o usuário seja um convidado
            let mesa_guest = await AsyncStorage.getItem('mesa_guest'); // encontra o número da mesa na memória
            setMesa(mesa_guest); //define a mesa na variável de exibição

            if(mesa_guest != '0' && mesa_guest != false){ //caso o usuário tenha uma mesa diferente de 0 (default)
                let json = await Api.MesaAtiva(mesa_guest); //verifica os dados da mesa no banco de dados
            
                if (json[0] != ''){
                    setProdList(json);
                    setOnTable(true);
                }else {
                    setOnTable(false);
                    alert ("Desculpe. Algo deu errado.");
                }
            }else { // caso a mesa seja inválida ou 0 (default)
                setOnTable(false); // não interpreta o número
            }
        }

        setLoading(false);    
    }

    const onRefresh = () =>{
        setRefreshing(false);
        getDetail();
    }

    const novaMesa = async () =>{
        //showIntersticial();
        navigation.navigate('JoinMesa');
    }

    const leaveMesa = async () =>{
        setLoading(true);
        setOnTable(false)

        let user_id = await AsyncStorage.getItem('user_id');

        if(user_id != '0'){
            let res = await Api.MesaUsuario(user_id, '0');
            getDetail();
        }else{
            setProdList([]);
            await AsyncStorage.setItem('mesa_guest', '0');
            setLoading(false);  
        }
    }

/*    const showIntersticial = async () =>{
        await AdMobInterstitial.requestAdAsync({servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
    }
*/
    const divisaoCalc = async () =>{
        let user_id = await AsyncStorage.getItem('user_id');
        let res = await Api.GetPerfil(user_id);
        navigation.navigate('CalcScreen', {mesa: res.user_mesa});
    }

    useEffect  (() => {
        //AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
        //teste: ca-app-pub-3940256099942544/1033173712
        //table4all: ca-app-pub-9791816249338036/2615179887
        getDetail();
    },[isFocused]);;

/*
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                setTestDeviceIDAsync
                servePersonalizedAds
                onDidFailToReceiveAdWithError={(err) => console.log(err)} 
            /> 
*/

    return(
        <Container>                  
                <Titulo>Minha mesa</Titulo>           
            {loading || onTable &&        
                <Mensagem>Cod: {mesa}</Mensagem>  
            }
            {loading &&
                <LoadingIcon size="large" color="#22B573" />
            }  
            {loading|| onTable &&    
                
            <Scroller 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                } >
             
                <ListArea>
                    {prodList.map((item, k)=>(
                        <ProdutoItem key={k} json={item} />
                    ))}
                </ListArea>

            </Scroller>
        }
        {onTable || 
            <NewTableButton onPress={novaMesa}>
                <Logob width="40" height ="40"/>
            </NewTableButton>
        }  
        {onTable && 
            <CalcButton onPress={ divisaoCalc }>
                <Calc width="40" height ="40"/>
            </CalcButton>
        }     
        {onTable && 
            <LeaveTableButton onPress={leaveMesa}>
                <Door width="40" height ="40"/>
            </LeaveTableButton>
        }     
        </Container>
    );

}