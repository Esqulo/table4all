import React, {useState, useEffect, useRef} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import Voltar from '../../icons/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MethodModal from '../../components/PaymentMethodModal'

import {
    Container,
    VoltarButton,
    SquareArea,
    SquareText,
    Input,
    ConfirmButton,
    ConfirmButtonText,
    InputArea,
    FinishButton,
    FinishButtonText,
    AvisoText,
    PrinceInputArea
} from './styles';

import { TextInputMask } from 'react-native-masked-text';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const PriceRef = useRef(null);
    
    const [valor, setValor] = useState('');
    const [metodo, setMetodo] = useState(1);  

    const [info, setInfo ] = useState({
        mesa: route.params.mesa,
        apelido: route.params.apelido,
        pago: route.params.pago,
        total: route.params.precoTotal
    });


    const [pt, setPt] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect  (() => {
        if (info.pago > 0){
            setPt(false);
        } 
    },[]);


    const PayClick = async () =>{
        if (valor != ''){
            let unmaskPrice = PriceRef?.current.getRawValue()

            let res = await Api.Payment(unmaskPrice, info.mesa);
            let valornum = parseFloat(unmaskPrice);
            info.pago += valornum;
            if (info.pago > 0){
                setPt(false);
            } 
            if (res != false){
                Alert.alert(
                    "Sucesso",
                    "R$ "+ valornum.toFixed(2) +" quitados.",
                    [
                    {
                        text: "Fechar",
                        onPress: () => setValor(''),
                        style: "default"
                    },
                    {
                        text: "Voltar",
                        onPress: () => navigation.goBack(),
                        style: "default"
                    },
                    {
                        text: "Início",
                        onPress: () => navigation.reset({
                            routes:[{name:'EMainTab'}]
                        }),
                        style: "default"
                    }
                    ]
                );
            }
            else{
                alert("Algo deu errado, por favor tente novamente");
            }
        }else{
            Alert.alert(
                "Erro!",
                "Por favor, insira um valor.",
                [
                {
                    text: "Ok"
                }
                ]
            );
        }

    }

    const Finish = async () =>{
        const user_id = await AsyncStorage.getItem('user_id');
        json = await Api.Finalizar(info.mesa, user_id, info.pago, metodo, info.apelido)
        Alert.alert(
            "Sucesso!",
            "Mesa Finalizada",
            [
              {
                text: "Ok",
                onPress: () => navigation.reset({
                    routes:[{name:'EMainTab'}]
                }),
                
                style: "default"
              }
            ]
        );
    }

    const voltarClick = () =>{
        navigation.goBack();
    }

    const QuitTotalClick = () =>{
        setShowModal(true);
    }

    const FinishClick = async () =>{

        let restante = info.total - info.pago;

        if (restante > 0){
            Alert.alert(
                "Não foi possível finalizar",
                "Ainda faltam R$ "+restante.toFixed(2)+" a serem quitados.",
                [
                  {
                    text: "Ok",
                    style: "default"
                  }
                ]
            );
        } else {
            Alert.alert(
                "Confirmar ação",
                "Deseja encerrar a conta?",
                [
                  {
                    text: "Cancelar"
                  },
                  {
                    text: "Confirmar",
                    onPress: () => Finish()
                  }
                ]
            );
        }
        
    }

    return (
        <Container>
            <SquareArea>
                <SquareText>Realizar Quitação</SquareText>
                <InputArea>
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
                            fontSize= {20}
                            color = "#22B573"
                            placeholderTextColor= "#22B573"
                            value={valor}
                            onChangeText={t => setValor(t)}
                            keyboardType="numeric"
                            ref={PriceRef}
                        />

                {/*
                    <Input
                        value = {valor} 
                        keyboardType="numeric" 
                        placeholderTextColor= "#22B573" 
                        placeholder= "Insira o valor" 
                        onChangeText={t => setValor(t)}>
                    </Input>
                */}
                </InputArea> 
            </SquareArea>

            <ConfirmButton onPress={PayClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
            {pt ||
                <FinishButton onPress={FinishClick}>
                    <FinishButtonText>Finalizar Mesa</FinishButtonText>
                </FinishButton>
            }            
            {pt &&
                <FinishButton onPress={QuitTotalClick}>
                    <FinishButtonText>Realizar Quitação Total</FinishButtonText>
                </FinishButton>
            }
            {pt ||
                <AvisoText>A mesa só pode ser finalizada após realizado o pagamento total.</AvisoText>
            }

            <MethodModal
                show={showModal}
                setShow={setShowModal}
                valorConta={info.total}
                mesa={info.mesa}
                apelido={info.apelido}
            />
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );
}