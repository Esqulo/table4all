import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {useNavigation } from '@react-navigation/native'
import Voltar from '../../../icons/back.svg';
import { 
    Container,
    Titulo,
    DayItem,
    NomeCampo,
    VoltarButton,
    SquareArea,
    Input,
    SquareTitle,
    MonthItem,
    YearItem,
    InputArea,
    ConfirmButton,
    ConfirmButtonText
} from './styles';

export default () => {
    const navigation = useNavigation();

    var findDay = new Date().getDate();
    var findMonth = new Date().getMonth() + 1;
    var findYear = new Date().getFullYear();

    const [day, setDay] = useState (findDay);
    const [month, setMonth] = useState (findMonth);
    const [year, setYear] = useState (findYear);

    const voltarClick = () =>{
        navigation.goBack();
    }
   
    const ConfirmClick = () =>{
        if (day != '' && month != '' && year != ''){
            if (day > 0 && day < 32 && month > 0 && month < 13 && year > 2000 && year < 2100 ) {
                if (month == 2 && day > 28 && (year % 4 != 0)){
                    Alert.alert(
                        "Erro",
                        "Data inválida!",
                        [
                          {
                            text: "Fechar"
                          }
                        ]
                    );
                }
                else{
                    if (month == 2 && (year % 4 == 0) && day > 29 ){
                        Alert.alert(
                            "Erro",
                            "Data inválida!",
                            [
                              {
                                text: "Fechar"
                              }
                            ]
                        )
                    }
                    else{
                        if ( (month == 4 || month == 6 || month == 9 || month == 11) && day > 30){
                            Alert.alert(
                                "Erro",
                                "Data inválida!",
                                [
                                  {
                                    text: "Fechar"
                                  }
                                ]
                            )
                        }
                        else{
                            navigation.navigate('VendasPorDataRes', {dia: day, mes: month, ano: year});
                        }
                    }
                }          
            }
            else{
                Alert.alert(
                    "Erro",
                    "Data inválida!",
                    [
                      {
                        text: "Fechar"
                      }
                    ]
                );
            }
        }
        else{
            Alert.alert(
                "Erro",
                "Preencha todos os campos!",
                [
                  {
                    text: "Fechar"
                  }
                ]
              );
        }
    }

    return(
        <Container>
            <SquareArea>
                <SquareTitle>Selecione a data</SquareTitle>
                <InputArea>
                    <DayItem>
                        <Input placeholder="Dia" placeholderTextColor= "#22B573" maxLength={2} keyboardType="numeric" value={String(day)} onChangeText={t => setDay(t)}/>
                    </DayItem>
                    <MonthItem>
                        <Input placeholder="Mês" placeholderTextColor= "#22B573" maxLength={2} keyboardType="numeric" value={String(month)} onChangeText={t => setMonth(t)}/>   
                    </MonthItem>
                    <YearItem>
                        <Input placeholder="Ano" placeholderTextColor= "#22B573" maxLength={4} keyboardType="numeric" value={String(year)} onChangeText={t => setYear(t)}/>   
                    </YearItem>
                </InputArea>
            </SquareArea>
            <ConfirmButton onPress={ConfirmClick}><ConfirmButtonText>Confirmar</ConfirmButtonText></ConfirmButton>

            <Titulo>Vendas por Data</Titulo>
            <VoltarButton onPress={voltarClick}>
                <Voltar width="40" height ="40"/>
            </VoltarButton>
        </Container>
    );

}