import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import Login from "../screens/Login"
import Setting from "../screens/Settings"
const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name ="Login"  component={Login} />
      <Drawer.Screen name ="Settings" component={Setting} />

    </Drawer.Navigator>
  )
}