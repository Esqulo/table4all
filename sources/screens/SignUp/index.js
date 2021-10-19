import React, { useState, useRef} from 'react';
import { Alert } from 'react-native';
import Logo from '../../icons/logo.svg';
import Voltar from '../../icons/back.svg';
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    InputArea,
    CustomButtom,
    CustomButtonText,
    ButtonVoltar,
    RadioArea,
    RadioText,
    PhoneInputArea,
    Scroller
} from './styles';
import { RadioButton } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text';

import SignInput from '../../components/SignInput';
import SignInputNumeric from '../../components/SignInputNumeric';
import SignInputEmail from '../../components/SignInputEmail';
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [nomeField, setNomeField] = useState('');
    const [sobrenomeField, setSobrenomeField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [celularField, setCelularField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [confirmpassField, setConfirmpassField] = useState('');
    const [tipoField, setTipoField] = useState('-1');
    const Phoneref = useRef(null);


    const confirmClick = async () => {
        
        if (nomeField != '' && emailField != '' && celularField != '', passwordField != '', confirmpassField != '', tipoField != '-1'){
            if ((passwordField)==(confirmpassField)){
                //(tipo, nome, sobrenome, senha, email, cel)
                
                let unmaskPhone = Phoneref?.current.getRawValue();
                console.log(unmaskPhone);
                let res = await Api.signUp(tipoField, nomeField, sobrenomeField, passwordField, emailField, unmaskPhone);
                
                console.log(res);

                if (res == true){
                    Alert.alert(
                        "Bem vindo(a)",
                        "Confirme o e-mail na sua caixa de entrada para habilitar o login.",
                        [
                          {
                            text: "Ok",
                            onPress: () => navigation.reset({
                                routes:[{name:'SignIn'}]
                            }),
                            style: "default"
                          }
                        ]
                      );

                }else {
                    Alert.alert(
                        "Falha no cadasto",
                        "Verifique os dados ou tente realizar login.",
                        [
                          {
                            text: "Ok"
                          }
                        ]
                      );
                }
              
            }else{
                alert("a senhas devem ser iguais!");
            }                
        } else{
            alert("Prencha os campos!");
        }


    }

    const backClick = () => {
        navigation.goBack();
    }

    return(
        <Container>
            <Logo width="50%" height ="100"></Logo>
            <Scroller>
                
                <RadioArea >
                <RadioButton value="0"
                    status = { tipoField === '0' ? 'checked' : 'unchecked' }
                    onPress={() => setTipoField('0')}
                    color="#22B573"
                />
                <RadioText onPress={() => setTipoField('0')}>Pessoa</RadioText>
                <RadioButton value="1"
                    status = { tipoField === '1' ? 'checked' : 'unchecked' }
                    onPress={() => setTipoField('1')}
                    color="#22B573"
                />
                <RadioText onPress={() => setTipoField('1')}>Estabelecimento</RadioText>

            </RadioArea>
                <InputArea>

                    <SignInput placeholder= "Insira seu nome *" 
                        value={nomeField}
                        onChangeText={t => setNomeField(t)}
                    />
                {tipoField != '1' &&
                    <SignInput placeholder= "Insira seu sobrenome" 
                        value={sobrenomeField}
                        onChangeText={t => setSobrenomeField(t)}
                    />
                }
                    <SignInputEmail placeholder= "Insira seu e-mail *" 
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />

                    <PhoneInputArea>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }
                            }
                            placeholder={"Insira seu celular ex: 00 91234-1234 *"}
                            color = "#FFF"
                            placeholderTextColor= "#FFF"
                            value={celularField}
                            onChangeText={t => setCelularField(t)}
                            keyboardType="numeric"
                            ref={Phoneref}
                        />
                    </PhoneInputArea>
                {/*<SignInputNumeric placeholder= "Insira seu celular ex: 00 91234-1234 *" 
                        value={celularField}
                        onChangeText={t => setCelularField(t)}
                    />
                    */}
                    <SignInput
                        placeholder= "Insira sua senha *"
                        password = {true}
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                    />

                    <SignInput
                        placeholder= "Repita sua senha *"
                        password = {true}
                        value={confirmpassField}
                        onChangeText={t => setConfirmpassField(t)}
                    />

                    <CustomButtom onPress={confirmClick}>
                        <CustomButtonText>CONFIRMAR</CustomButtonText>
                    </CustomButtom>

                </InputArea>
            </Scroller>
        
            <ButtonVoltar  onPress={backClick}> 
                <Voltar width="40" height ="40"/>
            </ButtonVoltar>
        </Container>
    );

}