import { View, Text ,TextInput,Button ,SafeAreaView} from 'react-native'
import React from 'react'

export default function login() {
  return (
    <SafeAreaView  >
      <Text>login</Text>
      <TextInput placeholder="usuario" />
      <TextInput  placeholder="contraseña"/>
      <Button title="login" onPress={console.log("login")} />

    </SafeAreaView>
  )
}

