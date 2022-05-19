import { View, Text ,TextInput,Button,SafeAreaView} from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <TextInput placeholder="usuario" />
      <TextInput  placeholder="contraseña"/>
      <TextInput placeholder="correo" />
      <TextInput  placeholder="celular"/>
      <Button title="guardar" onPress={console.log("setting")} />

    </SafeAreaView>
  )
}