import React, { useState, useRef} from 'react';
import { Alert } from 'react-native';
import Voltar from '../../icons/back.svg';
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtonText,
    ButtonVoltar,
    Titulo,
    PrinceInputArea,
    RadioArea,
    RadioText,
    RadioTitulo,
    RadioTCell,
    RadioCell
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProdutoInput from '../../components/SignInput';
import { RadioButton } from 'react-native-paper'
//import ProdutoInputNumeric from '../../components/PriceInput';
import { TextInputMask } from 'react-native-masked-text';
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [descricaoField, setDescricaoField] = useState('');
    const [precoField, setPrecoField] = useState('');
    const [tipoField, setTipoField] = useState('');
    const PriceRef = useRef(null);
    var unmaskPrice;

    const verifyClick = async () => {
        
        if (tipoField == ''){
            preencherAlerta();
        }
        if (tipoField == '0'){

            unmaskPrice = PriceRef?.current.getRawValue();

            if (descricaoField != '' && precoField != '' ){
                confirmClick();
            }else{
                preencherAlerta();
            }
        }
        if (tipoField == '1'){

            unmaskPrice = 0;

            if (descricaoField != ''){
                confirmClick();
            }else{
                preencherAlerta();
            }  
        }
    }

    const confirmClick = async () => {
        
        const user_id = await AsyncStorage.getItem('user_id');

        if(unmaskPrice > 0 || tipoField == '1'){

            let res = await Api.NovoProduto(descricaoField, unmaskPrice, user_id, tipoField);
    
            if (res == true){
    
                setDescricaoField('');
                setPrecoField('');
    
                Alert.alert(
                    "Sucesso!",
                    "Produto cadastrado.",
                    [
                        {
                            text: "Início",
                            onPress: () => navigation.reset({
                                routes:[{name:'EMainTab'}]
                            }),
                            style: "default"
                        },
                        {
                            text: "Voltar",
                            onPress: () => navigation.goBack(),
                            style: "default"
                        },
                        {
                            text: "Fechar",
                            style: "default"
                        }
                    ]
                );
                    
            }else{
                Alert.alert(
                    "Falha no cadasto",
                    "Tente novamente.",
                    [
                        {
                            text: "Ok"
                        }
                    ]
                );
            } 
        }else{
            preencherAlerta();
        } 
    }

    const backClick = () => {
        navigation.goBack();
    }

    const preencherAlerta = () => {
        Alert.alert(
            "Erro!",
            "Preencha os campo.",
            [
                {
                    text: "ok",
                    
                    style: "default"
                }
            ]
        );
    }

    return(
        <Container>
            <Titulo>Novo Produto</Titulo>
            <RadioTitulo>Tipo de Preço{"\n"}</RadioTitulo>
            <RadioArea>
                <RadioCell>
                    <RadioButton 
                        value="0"
                        status = { tipoField === '0' ? 'checked' : 'unchecked' }
                        onPress={() => setTipoField('0')}
                        color="#22B573"
                    />
                    <RadioText onPress={() => setTipoField('0')}>Fixo</RadioText>
                </RadioCell>
                <RadioCell>
                    <RadioButton 
                        value="1"
                        status = { tipoField === '1' ? 'checked' : 'unchecked' }
                        onPress={() => setTipoField('1')}
                        color="#22B573"
                    />
                    <RadioText onPress={() => setTipoField('1')}>Variável</RadioText>
                </RadioCell>
            </RadioArea>
            <InputArea>

                <ProdutoInput placeholder= "Insira a descrição do produto" 
                    value={descricaoField}
                    onChangeText={t => setDescricaoField(t)}
                />

            {tipoField != '1' &&
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
                        placeholder={"Insira o valor do produto"}
                        color = "#FFF"
                        placeholderTextColor= "#FFF"
                        value={precoField}
                        onChangeText={t => setPrecoField(t)}
                        keyboardType="numeric"
                        ref={PriceRef}
                    />
                </PrinceInputArea>
            }
                 {/*   <ProdutoInputNumeric placeholder= "Insira o valor do produto" 
                    value={precoField}
                    onChangeText={t => setPrecoField(t)}
                />
                */}
                <CustomButtom onPress={verifyClick}>
                    <CustomButtonText>CONFIRMAR</CustomButtonText>
                </CustomButtom>

            </InputArea>
            <ButtonVoltar  onPress={backClick}> 
                <Voltar width="40" height ="40"/>
            </ButtonVoltar>
        </Container>
    );

}