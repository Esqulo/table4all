import React, {useState, useRef} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import Voltar from '../../icons/back.svg';
import { Alert } from 'react-native';

import {
    Container,
    Descricao,
    VoltarButton,
    SquareArea,
    ConfirmButton,
    ConfirmButtonText,
    DeleteButton,
    DeleteButtonText,
    Input,
    InputArea,
    Titulo,
    PrinceInputArea
} from './styles';

import { TextInputMask } from 'react-native-masked-text';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const PriceRef = useRef(null);

    const [info, setInfo ] = useState({
        id: route.params.id,
        desc: route.params.desc,
        preco: route.params.preco
    });

    const [preco, setPreco] = useState('');

    const voltarClick = () =>{
        navigation.goBack();
    }

    const EditarClick = async () =>{
        if (preco != ''){
            let unmaskPrice = PriceRef?.current.getRawValue()
            
            let res = await Api.EditarProduto(info.id, unmaskPrice);   

            if (res != false){
                Alert.alert(
                    "Sucesso!",
                    "Produto alterado.",
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
                alert("Algo deu errado, por favor tente novamente");
            }
        }
        else{
            Alert.alert(
                "Insira o novo valor!",
                "O valor do produto não foi alterado.",
                [
                    {
                        text: "Ok",
                        style: "default"
                    }
                ]
            );
        }
    }

    const Deletar = async () =>{

        let res = await Api.DeletarProduto(info.id);

        if (res != false){
            Alert.alert(
                "Sucesso!",
                "Produto excluído.",
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
            alert("Algo deu errado, por favor tente novamente");
        }
    }

    const DeleteClick = () =>{
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
            <Titulo>Editar Produto</Titulo>
            <SquareArea>
                <Descricao>{info.desc}</Descricao>
                
                <PrinceInputArea>
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
                        placeholder={info.preco}
                        fontSize= {20}
                        color = "#22B573"
                        placeholderTextColor= "#22B573"
                        value={preco}
                        onChangeText={t => setPreco(t)}
                        keyboardType="numeric"
                        ref={PriceRef}
                    />
                </PrinceInputArea>


            {/*  <InputArea>
                    <Input
                        placeholderTextColor= "#22B573"
                        placeholder= {info.preco} 
                        onChangeText={t => setPreco(t)}
                        keyboardType="numeric"
                        value = {preco}
                    />
                </InputArea>
            */}
            </SquareArea>
            <ConfirmButton onPress={EditarClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            <DeleteButton onPress={DeleteClick}><DeleteButtonText>Excluir Produto</DeleteButtonText></DeleteButton>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}