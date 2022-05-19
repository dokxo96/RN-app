 
import React from 'react'
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../screens/Login"
import Setting from "../screens/Settings"
const Stack = createNativeStackNavigator();
export default function NavigationsStack() {
 return (
     <Stack.Navigator initialRouteName="Settings">
         <Stack.Screen name ="Login"  component={Login}/>
         <Stack.Screen name ="Settings" component={Setting}/> 
     </Stack.Navigator>
 );
}