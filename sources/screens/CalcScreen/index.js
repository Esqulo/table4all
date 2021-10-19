import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import Voltar from '../../icons/back.svg';

import {
    Container,
    Titulo,
    VoltarButton,
    SquareArea,
    SquareText,
    Input,
    LoadingIcon,
    InputArea,
    CalcText,
    CalcTitle,
    CalcArea,
    CalcContent,
    Mensagem
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [loading, setLoading] = useState(false);
    
    const [pago, setPago] = useState(0);
    const [aberto, setAberto] = useState(0);
    const [precoTotal, setPrecoTotal] = useState(0);

    const [info, setInfo ] = useState({
        mesa: route.params.mesa
    });
    
    const [pessoas, setPessoas] = useState(''); 
    const [pessoasN, setPessoasN] = useState(1); 

    const getDetail = async () => {

        setLoading(true);

        let res = await Api.getTotal(info.mesa);
      
        var preco_total = 0;

        for (var i = 0, len=res.length; i < len; i++){
            preco_total = res[i].pedido_quantidade * res[i].prod_preco + preco_total;
        }
        
        setPrecoTotal(preco_total);

        let ValorPago = await Api.VerPago(info.mesa);
        setPago(parseFloat(ValorPago.mesa_pago));
        
        setAberto(preco_total - ValorPago.mesa_pago); 
        
        let numeroPessoas = await Api.dividirConta(info.mesa);
        
        if (numeroPessoas == false){
            setPessoas('1');
            setPessoasN(1);
        }else{
            setPessoas(String(numeroPessoas));
            setPessoasN(numeroPessoas);
        }    
    
        setLoading(false);
    }
    
    const voltarClick = () =>{
        navigation.goBack();
    }

    const changeInputText = (t) =>{
        if (t != ''){
            setPessoas(t);
            setPessoasN(parseInt(t))
        }else{
            setPessoas('');
            setPessoasN(1)            
        }
    }

    useEffect  (() => {
        getDetail();
    },[]);

    return (
        <Container>
            <Titulo>Detalhes do Pagamento</Titulo>
            <Mensagem>Os valores são calculados automaticamente</Mensagem> 
            { loading ||
            <SquareArea>
                <SquareText>Quantidade de pessoas</SquareText>
                    <InputArea><Input placeholderTextColor= "#22B573" placeholder= "Insira a quantidade de pessoas" onChangeText={t => changeInputText(t) } value={pessoas} keyboardType="numeric" ></Input></InputArea> 
                </SquareArea>
            }
            { loading ||
                <CalcArea>
                    <CalcContent>
                        <CalcTitle>Valor total:</CalcTitle>               
                        <CalcText>R$ {precoTotal.toFixed(2)}</CalcText>
                    </CalcContent>
                    
                    <CalcContent>
                        <CalcTitle>Valor pago:</CalcTitle>               
                        <CalcText>R$ {pago.toFixed(2)}</CalcText>
                    </CalcContent>

                    <CalcContent>
                        <CalcTitle>Valor pendente:</CalcTitle>               
                        <CalcText>R$ {aberto.toFixed(2)}</CalcText>
                    </CalcContent>
                    
                    <CalcContent>
                        <CalcTitle>Divisão do valor total:</CalcTitle>               
                        <CalcText>R$ {(precoTotal / pessoasN ).toFixed(2)}</CalcText>
                    </CalcContent>    
                    
                    <CalcContent>
                        <CalcTitle>Divisão do valor pendente:</CalcTitle>               
                        <CalcText>R$ {(aberto / pessoasN ).toFixed(2)}</CalcText>    
                    </CalcContent>
                </CalcArea>
            }
            { loading &&
                <LoadingIcon size="large" color="#22B573"/>
            }

            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}