import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Gato from "./src/Gato"
import Lista from './src/Lista'

// var gato = new Gato();


var lista = new Lista();


export default function App() {
  return (
    <View style={styles.container}>
      {lista}
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
});


