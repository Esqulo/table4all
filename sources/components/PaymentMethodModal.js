import React, {useState} from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import SlideDown from '../icons/slideDown.svg'
import { RadioButton } from 'react-native-paper';
import Api from '../Api';


const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #22B573;
    height: 57%;
    flexDirection: column;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 15% 10px 10px 10px;
    justify-content: space-between;
    align-items: center; 
`;

const CloseButton = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    position: absolute;
    right: 5%;
    top: 5%;
    z-index: 9;
`;

const ModalContentArea = styled.View`
    width: 100%;
    height: 55px;
    flexDirection: row;
    background-color: #FFF;
    justify-content: space-between;
    align-items: center; 
    border-radius: 30px;
`;

const RadioArea = styled.SafeAreaView`
    flexDirection: row;
    padding-right: 15px;
`;

const RadioText = styled.Text`
    margin-left: 7%;
    fontSize: 20px;
    color: #22B573;
    padding-right: 10px;
`;

const ConfirmButton = styled.TouchableOpacity`
    background-color: #FFF;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 375px;
    height: 45px;
    align-items: center; 
    justify-content: center;
`;

const ConfirmButtonText = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #22B573;
`;

export default ({show, setShow, valorConta, mesa, apelido}) => {
    const navigation = useNavigation();
    
    const CloseClick = () =>{
        setShow(false);
    }
    
    const [tipoField, setTipoField] = useState(1);

    const Finish = async () =>{
        const user_id = await AsyncStorage.getItem('user_id');
        json = await Api.Finalizar(mesa, user_id, valorConta, tipoField, apelido)
        let res = await Api.Payment(valorConta, mesa);
        setShow(false);
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

    const FinishClick = async () =>{
        if (tipoField != 1){   
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
        }else{
            Alert.alert(
                "Erro",
                "Por favor, selecione uma opção.",
                [
                    {
                        text: "ok"
                    }
                ]
            ); 
        }
    }

    return(
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >
            <ModalArea>
                <ModalBody>
                    <ModalContentArea>
                        <RadioText>Dinheiro</RadioText>
                        <RadioArea >
                            <RadioButton value="2"
                                status = { tipoField === '2' ? 'checked' : 'unchecked' }
                                onPress={() => setTipoField('2')}
                                color="#22B573"
                            /> 
                        </RadioArea>
                    </ModalContentArea>
                    <ModalContentArea>
                        <RadioText>Cartão</RadioText>
                        <RadioArea>
                            <RadioButton value="3"
                                status = { tipoField === '3' ? 'checked' : 'unchecked' }
                                onPress={() => setTipoField('3')}
                                color="#22B573"
                            />
                        </RadioArea>
                    </ModalContentArea>
                    <ModalContentArea>
                        <RadioText>Pix</RadioText>
                        <RadioArea>
                            <RadioButton value="4"
                                status = { tipoField === '4' ? 'checked' : 'unchecked' }
                                onPress={() => setTipoField('4')}
                                color="#22B573"
                            />
                        </RadioArea>
                    </ModalContentArea>
                    <ModalContentArea>
                        <RadioText>PicPay</RadioText>
                        <RadioArea>
                            <RadioButton value="5"
                                status = { tipoField === '5' ? 'checked' : 'unchecked' }
                                onPress={() => setTipoField('5')}
                                color="#22B573"
                            />
                        </RadioArea>
                    </ModalContentArea>
                    <ModalContentArea>
                        <RadioText>Transferência Bancária</RadioText>
                        <RadioArea>
                            <RadioButton value="6"
                                status = { tipoField === '6' ? 'checked' : 'unchecked' }
                                onPress={() => setTipoField('6')}
                                color="#22B573"
                            />
                        </RadioArea>
                    </ModalContentArea> 
                    <ConfirmButton onPress={FinishClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>
                    <CloseButton onPress={CloseClick}>
                        <SlideDown width="35" height="35"/>
                    </CloseButton>
                </ModalBody>
            </ModalArea>

        </Modal>
    );
}