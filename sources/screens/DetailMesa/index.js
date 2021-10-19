import React, {useState, useEffect} from 'react';
import {useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import ProdutoItem from '../../components/ProdutoItem';
import Voltar from '../../icons/back.svg';
import Calc from '../../icons/calc.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Scroller,
    ListArea,
    LoadingIcon,
    TotalArea,
    TotalText,
    Apelido,
    Codigo,
    VoltarButton,
    EndButton,
    EndButtonText,
    TotalAreaVerde,
    AdicionarButton,
    AdicionarButtonText,
    CalcButton
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const route = useRoute();
    const [info, setInfo ] = useState({
        apelido: route.params.apelido,
        mesa: route.params.mesa
    });

    const [loading, setLoading] = useState(true);
    const [prodList, setProdList] = useState([]);
    const [precoTotal, setPrecoTotal] = useState(0);
    const [pago, setPago] = useState(0);
    const [aberto, setAberto] = useState(0);

    useEffect  (() => {
        
        const getDetail = async () => {
            
            setLoading(true);

            let json = await Api.histDetail(info.mesa);            
           
            if (json != ''){
                setProdList(json);
            } else {
                setProdList([]);
            }
          
            var preco_total = 0;
            
            let jsonParse;

            for (var i = 0, len=json.length; i < len; i++){

                if(json[i].prod_tipoPreco == '0' ){
                    preco_total = json[i].pedido_quantidade * json[i].prod_preco + preco_total;
                }
                if(json[i].prod_tipoPreco == '1' ){
                    jsonParse = parseFloat(json[i].pedido_valorUn)
                    preco_total = jsonParse + preco_total;
                }
                
            }
            
            setPrecoTotal(preco_total);

            let ValorPago = await Api.VerPago(info.mesa);
            setPago(parseFloat(ValorPago.mesa_pago));
            
            setAberto(preco_total - ValorPago.mesa_pago);

            setLoading(false);
        
        }

        getDetail();

    },[isFocused]);

    const voltarClick = () =>{
        navigation.goBack();
    }

    const divisaoCalc = async () =>{
        navigation.navigate('CalcScreen', {mesa: info.mesa});
    }

    const addClick = () =>{
        navigation.navigate("MesaAddProd", {mesa: info.mesa});
    }

    const paymentClick = () =>{
        navigation.navigate("Payment", {mesa: info.mesa, apelido: info.apelido, pago: pago, precoTotal: precoTotal});
    }

    return (
        <Container>
            <Apelido>{info.apelido}</Apelido>
            <Codigo>cod: {info.mesa}</Codigo>
            <Scroller>
                {loading &&
                    <LoadingIcon size="large" color="#22B573" />
                }
                {loading ||
                <ListArea>
                    {prodList.map((item, k)=>(
                        <ProdutoItem key={k} json={item} />
                    ))}
                </ListArea>
                }
            
            {loading ||
            <TotalAreaVerde>
                <TotalArea>
                    <TotalText>Total:</TotalText>
                    <TotalText>R$ {precoTotal.toFixed(2)}</TotalText>
                </TotalArea>
                <TotalArea>
                    <TotalText>Total Pago:</TotalText>
                    <TotalText>R$ {pago.toFixed(2)}</TotalText>
                </TotalArea> 
                <TotalArea>
                    <TotalText>Em Aberto:</TotalText>
                    <TotalText>R$ {aberto.toFixed(2)}</TotalText>
                </TotalArea>
            </TotalAreaVerde>
            }
            {loading ||
            <AdicionarButton onPress={addClick}>
                <AdicionarButtonText>Adicionar Produtos</AdicionarButtonText>
            </AdicionarButton>
            }
            {loading ||
            <EndButton onPress={paymentClick}>
                <EndButtonText>Realizar Pagamento</EndButtonText>
            </EndButton>
            }

            </Scroller>

            <CalcButton onPress={ divisaoCalc }>
                <Calc width="40" height ="40"/>
            </CalcButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}