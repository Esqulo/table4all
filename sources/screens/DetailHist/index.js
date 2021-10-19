import React, {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import {useNavigation, useRoute } from '@react-navigation/native';
import ProdutoItem from '../../components/ProdutoItem';
import Voltar from '../../icons/back.svg';

import {
    Container,
    Scroller,
    ListArea,
    LoadingIcon,
    TotalArea,
    TotalText,
    Apelido,
    Dia,
    VoltarButton,
    DeleteButton,
    DeleteButtonText,
    PagoEm
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [info, setInfo ] = useState({
        total: route.params.total,
        estab: route.params.estab,
        hdia: route.params.hdia,
        hmesa: route.params.hmesa,
        hid: route.params.hid,
        metodo: route.params.metodo
    });
    const [loading, setLoading] = useState(true);
    const [prodList, setProdList] = useState([]);
    const [metPag, setMetPag] = useState('');

    const getDetail = async () => {
            
        setLoading(true);
        let json = await Api.histDetail(info.hmesa);
       
        if (json[0] != ''){
            setProdList(json);
        } else {
            alert ("Desculpe. Algo deu errado.");
        }

        json = await Api.metodoPagamento(info.metodo);
        setMetPag(json.metodo_desc);

        setLoading(false);
    
    }

    useEffect  (() => {
        getDetail();

    },[]);

    const voltarClick = () =>{
      navigation.goBack();
    }

    const Deletar = async () => {
        let res = await Api.DeletarHist(info.hid);
        Alert.alert(
            "Sucesso!",
            "O registro foi excluído.",
            [
              {
                text: "Ok",
                onPress: () => navigation.goBack(),
                style: "default"
              }
            ]
        );
    }

    const DeletarClick = () =>{
        Alert.alert(
            "Tem certeza?",
            "Essa operação não pode ser desfeita.",
            [
                {
                    text: "SIM",
                    onPress: () => Deletar(),
                    style: "default"
                },
                {
                    text: "NÃO",
                    style: "default"
                }
            ]
        );
    }

    return (
        <Container>
            <Apelido>{info.estab}</Apelido>
            <Dia>{info.hdia}</Dia>
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
                <TotalArea>
                    <TotalText>Total:</TotalText>
                    <TotalText>R$ {info.total}</TotalText>
                </TotalArea>
                }
                {loading ||
                    <PagoEm>Método de pagamento: {metPag}</PagoEm>
                }
            </Scroller>
            {loading ||
                <DeleteButton onPress={DeletarClick}><DeleteButtonText>Apagar</DeleteButtonText></DeleteButton>
            }
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}