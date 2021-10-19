import React, { useEffect, useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, LoadingIcon } from './styles';
import Tablelogo from '../../icons/logo.svg';
import Api from '../../Api';
import {UserContext} from  '../../contexts/UserContext';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    
    const navigation = useNavigation();

    useEffect( ()=>{
        
        const checkToken = async () =>{
           
            const token_email = await AsyncStorage.getItem('user_email');
            const token_senha = await AsyncStorage.getItem('user_senha');

            if (token_email != null && token_email != '0'){
                let res = await Api.checkToken(token_email, token_senha);
                if (res.user_id){  
                    await AsyncStorage.setItem('user_email', res.user_email);
                    await AsyncStorage.setItem('user_senha', res.user_senha);
                    await AsyncStorage.setItem('user_id', res.user_id);
                    await AsyncStorage.setItem('user_nome', res.user_nome);
    
                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.user_avatar
                        }
                    });
                    
                    if(res.user_tipo == '0'){
                        navigation.reset({
                            routes:[{name:'MainTab'}]
                        });
                    }else{
                        navigation.reset({
                            routes:[{name:'EMainTab'}]
                        });
                    }

                } else {
                    navigation.reset({
                        routes:[{name:'SignIn'}]
                    });
                }
            } else {  
                navigation.reset({
                    routes:[{name:'SignIn'}]
                });
            }
        }

        checkToken();

    }, []);
    
    return(
        <Container>
            <Tablelogo widht="50%" height="160" />
            <LoadingIcon size="large" color="#000000" />
        </Container>
    );
}
