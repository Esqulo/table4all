import React, {useState, useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Voltar from '../../icons/back.svg';
import { Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import {
    Container,
    Campo,
    VoltarButton,
    SquareArea,
    ConfirmButton,
    ConfirmButtonText,
    Input,
    InputArea,
    Titulo,
    QuantButton,
    QuantButtonText,
    RowArea,
    PriceInputArea
} from './styles';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const PriceRef = useRef(null);

    const [info, setInfo ] = useState({
        idprod: route.params.idprod,
        desc: route.params.desc,
        idmesa: route.params.idmesa,
        tipo: route.params.tipo
    });

    const [quant, setQuant] = useState ('');
    const [precoField, setPrecoField] = useState('');
    var quantidade;

    const voltarClick = () =>{
        navigation.goBack();
    }

    const minusClick = async () =>{
        if (quant > 0){
            quantidade = quant;
            parseInt(quantidade);
            quantidade--;
            setQuant(String(quantidade));
        }
    }

    const plusClick = async () =>{
        quantidade = quant;
        parseInt(quantidade);
        quantidade++;
        setQuant(String(quantidade));
    }

    const ConfirmClick = async () =>{

        if(info.tipo == '0'){

            if (quant != '' && quant > 0){

                let res = await Api.addProdutosMesa(info.idprod, info.idmesa, quant, info.tipo);   

                if (res != false){
                    Alert.alert(
                        "Sucesso!",
                        "Produto adicionado.",
                        [
                            {
                                text: "Ok",
                                onPress: () => navigation.goBack(),
                                style: "default"
                            }
                        ]
                    );
                }
                else{
                    Alert.alert(
                        "Algo deu errado",
                        "Tente novamente.",
                        [
                            {
                                text: "Ok",
                                style: "default"
                            }
                        ]
                    );
                }
            }
            else{
                Alert.alert(
                    "Erro!",
                    "Insira a quantidade.",
                    [
                        {
                            text: "Ok",
                            style: "default"
                        }
                    ]
                );
            }
        }
        if(info.tipo == '1'){
            
            let unmaskPrice = PriceRef?.current.getRawValue();
           
            if (precoField != '' && unmaskPrice > 0){

                let res = await Api.addProdutosMesa(info.idprod, info.idmesa, unmaskPrice, info.tipo);   

                if (res != false){
                    Alert.alert(
                        "Sucesso!",
                        "Produto adicionado.",
                        [
                            {
                                text: "Ok",
                                onPress: () => navigation.goBack(),
                                style: "default"
                            }
                        ]
                    );
                }
                else{
                    Alert.alert(
                        "Algo deu errado",
                        "Tente novamente.",
                        [
                            {
                                text: "Ok",
                                style: "default"
                            }
                        ]
                    );
                }
            }
            else{
                Alert.alert(
                    "Erro!",
                    "Insira o valor.",
                    [
                        {
                            text: "Ok",
                            style: "default"
                        }
                    ]
                );
            }
        } 
    }

    return (
        <Container>
            <Titulo>Inserir Produto</Titulo>
            <SquareArea>
                <Campo>{info.desc}</Campo>
                

                {info.tipo == '0' &&
                    <RowArea>
                        <QuantButton onPress={ minusClick }><QuantButtonText>-</QuantButtonText></QuantButton>
                        <InputArea>
                            <Input
                                placeholderTextColor= "#22B573"
                                placeholder= "Insira a quantidade" 
                                onChangeText={t => setQuant(t)}
                                value = {quant}
                                keyboardType="numeric"
                            />
                        </InputArea>
                        <QuantButton onPress={ plusClick }><QuantButtonText>+</QuantButtonText></QuantButton>
                    </RowArea>
                }
                {info.tipo == '1' &&
                    <RowArea>
                        <PriceInputArea>
                            <TextInputMask
                                type={'money'}
                                options={{
                                    mprecision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$ ',
                                    suffixUnit: ''
                                }
                                }
                                placeholder={"Insira o valor"}
                                color = "#22b573"
                                placeholderTextColor= "#22b573"
                                value={precoField}
                                fontSize= {20}
                                onChangeText={t => setPrecoField(t)}
                                keyboardType="numeric"
                                ref={PriceRef}
                            />
                        </PriceInputArea>
                    </RowArea>
                }


            </SquareArea>
            <ConfirmButton onPress={ConfirmClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}