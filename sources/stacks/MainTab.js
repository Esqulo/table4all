import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import uHome from '../screens/uHome';
import uRel from '../screens/uRel';
import uPerfil from '../screens/uPerfil';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name= "uHome" component={uHome}/>
        <Tab.Screen name= "uRel" component={uRel}/>
        <Tab.Screen name= "uPerfil" component={uPerfil}/>
    </Tab.Navigator>
);