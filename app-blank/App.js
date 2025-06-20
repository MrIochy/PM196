// importaciones
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, Alert, Platform, Switch } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  // Función para mostrar alertas según la plataforma
  const showAlert = (message) => {
    if (Platform.OS === 'web') {
      window.alert(message);
    } else {
      Alert.alert(message);
    }
  };

  // Estado y función para el Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Sección de Buttons */}
      <Text style={styles.title}>React Native Buttons Test</Text>
      
      {/* Botón básico */}
      <View style={styles.section}>
        <Text style={styles.description}>Boton básico</Text>
        <Button
          title="Presioname"
          onPress={() => showAlert('Boton presionado!')}
        />
      </View>
      
      {/* Botón de color */}
      <View style={styles.section}>
        <Text style={styles.description}>Boton de color:</Text>
        <Button
          title="Boton de color"
          color="#CCFF00"
          onPress={() => showAlert('Boton de color presionado!')}
        />
      </View>
      
      {/* Botón deshabilitado */}
      <View style={styles.section}>
        <Text style={styles.description}>Boton deshabilitado:</Text>
        <Button
          title="Deshabilitado"
          disabled
          onPress={() => showAlert('No funciona :(')}
        />
      </View>
      
      {/* Botones alineados */}
      <View style={styles.section}>
        <Text style={styles.description}>Two Buttons:</Text>
        <View style={styles.buttonRow}>
          <Button 
            title="Izquierda" 
            onPress={() => showAlert('boton Izquierdo presionado')} 
          />
          <View style={styles.buttonSpacer} />
          <Button 
            title="derecha" 
            onPress={() => showAlert('boton Derecho presionado')} 
          />
        </View>
      </View>
      
      {/* Sección de Switch */}
      <View style={styles.section}>
        <Text style={styles.label}>Activar Característica</Text>
        <Switch
          trackColor={{ false: "#CCFF00", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#CCFF00" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.statusText}>Estado actual: {isEnabled ? 'Activado' : 'Desactivado'}</Text>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSpacer: {
    width: 10,
    color: 'transparent',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    color: '#666',
  },
});

export default App;