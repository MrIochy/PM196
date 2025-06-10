import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Button } from 'react-native';

    const Texto = () => {
      return(
      <Text>Hola Mundo desde React Native</Text>
      )
    }

  export default function App() {
  return (

    <View style={styles.container}>
      <Text>Hola Mundo desde React Native</Text>
      <Button title="Presioname"></Button>
      // <Button/> otro formato para crear un botón
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
