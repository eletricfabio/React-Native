import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Fábio');
  const [person, setPerson] =useState({ name: 'Fabinho', age: 37 });

  const clickHandler = () => {
    setName('Fábio Vieira');
    setPerson({name: 'FábioDev', age: 38 });
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.boldText}>Meu primeiro app!</Text>
      <Text></Text>
    </View>
    <View style={styles.body}>
      <Text>Meu nome é {name}. </Text>
      <Text></Text>
      <Text>Pode me chamar de {person.name} eu tenho {person.age}.</Text>
      <View style={styles.buttonContrainer}>
        <Button title='Atualizar' onPress={clickHandler}/>
      </View>
    </View>
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
buttonContrainer: {
  marginTop: 20
}
});
