import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function UserDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text style={styles.text}>Nombre: Juan Pérez</Text>
      <Text style={styles.text}>Email: juan@example.com</Text>
      <Text style={styles.text}>Teléfono: 555-1234</Text>
      
      <Pressable 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Regresar a Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B07BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#B07BFF',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});