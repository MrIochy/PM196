// importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto = (props) => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizaTexto = () => { setContenido('State Modificado'); };
  return (
    <Text style={[styles.text, props.style]} onPress={actualizaTexto}>{contenido}</Text>
  );
}

//Main
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.amarillo}></Texto>
      <Texto style={styles.azul}></Texto>
      <Button title="Presioname"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text:{
    color: 'grey',
    fontSize: 27,
  },
  verde:{backgroundColor:'green',},
  amarillo:{backgroundColor:'yellow',},
  azul:{backgroundColor:'blue',},
});