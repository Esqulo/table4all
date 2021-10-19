import React, { useState, useEffect } from 'react';
import {useNavigation } from '@react-navigation/native'
import { 
    Container,
    Scroller,
    ListArea,
    Titulo,
    RelItem,
    NomeCampo
} from './styles';

export default () => {
    const navigation = useNavigation();
   
    const HistClick = () =>{
        navigation.navigate('eHistorico');
    }

    const VendasPorData = () =>{
        navigation.navigate('VendasPorData');
    }

    return(
        <Container>
            <Scroller>
                <Titulo>Relatórios</Titulo>
                <ListArea>
                    <RelItem onPress={HistClick}>
                        <NomeCampo>Históricos</NomeCampo>   
                    </RelItem>

                    <RelItem onPress={VendasPorData}>
                        <NomeCampo>Vendas por data</NomeCampo>   
                    </RelItem>

                </ListArea>
            </Scroller>
        </Container>
    );

}