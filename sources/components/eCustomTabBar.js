import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../icons/home.svg';
import RelIcon from '../icons/list.svg';
import PerfilIcon from '../icons/perfil.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #22B573;
    flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items:center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
    border-radius: 35px;
    border: 3px solid #22B573;
    margin-top: -20px;
`;

export default ({state, navigation}) => {
    
    const goTo = (screenName) =>{
        navigation.navigate(screenName);
    }
    
    return (
        <TabArea>
            <TabItem onPress={() => goTo('eRel')}>
                <RelIcon style={{opacity: state.index===1? 1: 0.7}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter  onPress={() => goTo('eHome')}>
                <HomeIcon width="32" height="32" fill="#22B573" />
            </TabItemCenter>            
            <TabItem  onPress={() => goTo('ePerfil')}>
                <PerfilIcon style={{opacity: state.index===2? 1: 0.7}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}