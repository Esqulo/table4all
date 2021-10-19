import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './sources/stacks/MainStack';
import UserContextProvider from './sources/contexts/UserContext';


export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
  );
}
