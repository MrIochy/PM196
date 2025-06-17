import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

const Texto = (props) => {
  const {children} = props;
  const [contenido, setContenido] = useState(children);
  const actualizaTexto = () => setContenido('Texto modificado');
  
  return(
    <Text onPress={actualizaTexto}> {contenido}</Text>
  )
}

export default function App() {
  const [titulo, setTitulo] = useState('Presioname');
  const actualizaBtn = () => setTitulo("Botón presionado!");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto>Hola</Texto>
      <Texto>Mundo</Texto>
      <Texto>React Native</Texto>
      <Button onPress={actualizaBtn} title={titulo}/>
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