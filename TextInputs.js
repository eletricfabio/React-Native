import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Fábio');
  const [age, setAge] =useState('37');

  return (
    <View style={styles.container}>
      <Text>Digite um nome:</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Seu nome'
      onChangeText={(val) => setName(val)} />

      <Text>Digite sua idade:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input} 
      placeholder='Sua idade'
      onChangeText={(val) => setAge(val)} />

      <Text>Nome: {name}, Idade: {age}</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
input:{
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin: 10,
  width: 200,
}
});
