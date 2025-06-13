import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

    const Texto = (props) => {
      const {children} = props;
      return(
        <Text> {children}</Text>
      )
    }

  export default function App() {
  return (

    <View style={styles.container}>
      <statusBar style="auto" />
      <Texto>Hola</Texto>
      <Texto>Mundo</Texto>
      <Texto>React Native</Texto>
      <Button title = "Presioname"/>
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
