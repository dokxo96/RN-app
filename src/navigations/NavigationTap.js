import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login'
import Setting from "../screens/Settings"

const Tab = createBottomTabNavigator();

export default function NavigationTab() {

    return (
        <Tab.Navigator >
           
            <Tab.Screen name ="Login"  component={Login} />
            <Tab.Screen name ="Settings"  component={Setting} />


        </Tab.Navigator>
    );

    
} 
