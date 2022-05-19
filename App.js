import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Navigation from './src/navigations/NavigationsStack';
import NavigationTab from './src/navigations/NavigationTap';
import NavigationDrawer from './src/navigations/NavigationDrawer';
export default function App() {
  
  
     return (
    <NavigationContainer>
         <NavigationDrawer
         /> 
         

      </NavigationContainer>  

     
    );
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
