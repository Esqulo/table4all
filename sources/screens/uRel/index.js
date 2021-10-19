import React from 'react';
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
        navigation.navigate('uHistorico');
    }

    return(
        <Container>
            <Scroller>
                <Titulo>Relatórios</Titulo>
                <ListArea>
                    <RelItem onPress={HistClick}>
                        <NomeCampo>Históricos</NomeCampo>   
                    </RelItem>

                </ListArea>
            </Scroller>
        </Container>
    );

}