import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/eCustomTabBar';

import eHome from '../screens/eHome';
import eRel from '../screens/eRel';
import ePerfil from '../screens/ePerfil';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name= "eHome" component={eHome}/>
        <Tab.Screen name= "eRel" component={eRel}/>
        <Tab.Screen name= "ePerfil" component={ePerfil}/>
    </Tab.Navigator>
);