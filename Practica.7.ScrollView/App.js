import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, Switch, Button, TextInput, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DemoScrollView = () => {
  // Referencia para controlar el ScrollView programáticamente
  const scrollViewRef = useRef(null);

  // Estados para controlar las propiedades dinámicas
  const [horizontal, setHorizontal] = useState(false);
  const [showIndicators, setShowIndicators] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [bounces, setBounces] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(false);
  const [keyboardDismissMode, setKeyboardDismissMode] = useState('none');
  const [text, setText] = useState('');

  // Función para desplazarse al final
  const scrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  // Función para desplazarse al inicio
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Controles de configuración */}
      <View style={styles.controls}>
        <Text style={styles.title}>Configuración del ScrollView</Text>
        
        <View style={styles.controlRow}>
          <Text><b>Direccion</b> "horizontal" es una propiedad de tipo boolean donde las opciones son:	Scroll horizontal (true) o vertical (false)</Text>
          <Switch value={horizontal} onValueChange={setHorizontal} />
        </View>

        <View style={styles.controlRow}>
          <Text><b>Mostrar barras de scroll</b> "showIndicators" es una propiedad de tipo boolean donde las opciones son:	Habilitadas (true) o Deshabilitadas (false)</Text>
          <Switch value={showIndicators} onValueChange={setShowIndicators} />
        </View>

        <View style={styles.controlRow}>
          <Text><b>Scroll habilitado</b> "scrollEnabled" (Boolean): Habilita/deshabilita el scroll (true por defecto)</Text>
          <Switch value={scrollEnabled} onValueChange={setScrollEnabled} />
        </View>

        <View style={styles.controlRow}>
          <Text>Efecto rebote (iOS):</Text>
          <Switch value={bounces} onValueChange={setBounces} />
        </View>

        <View style={styles.controlRow}>
          <Text>Modo página (pagingEnabled):</Text>
          <Switch value={pagingEnabled} onValueChange={setPagingEnabled} />
        </View>

        <View style={styles.controlRow}>
          <Text>Comportamiento teclado:</Text>
          <Button
            title={keyboardDismissMode}
            onPress={() => {
              const modes = ['none', 'on-drag', 'interactive'];
              const nextMode = modes[(modes.indexOf(keyboardDismissMode) + 1)] || modes[0];
              setKeyboardDismissMode(nextMode);
            }}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button title="Ir al inicio" onPress={scrollToTop} />
          <Button title="Ir al final" onPress={scrollToEnd} />
        </View>
      </View>

      {/* ScrollView demostrativo */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showIndicators}
        showsVerticalScrollIndicator={showIndicators}
        scrollEnabled={scrollEnabled}
        bounces={bounces}
        pagingEnabled={pagingEnabled}
        keyboardDismissMode={keyboardDismissMode}
      >
        {/* Bloques de colores para visualizar el scroll */}
        {['red', 'blue', 'green', 'purple', 'orange'].map((color, index) => (
          <View
            key={index}
            style={[
              styles.block,
              { backgroundColor: color },
              horizontal ? { width: width - 40 } : null
            ]}
          >
            <Text style={styles.blockText}>Bloque {index + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe para probar el teclado"
              value={text}
              onChangeText={setText}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  controls: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
  },
  block: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  blockText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default DemoScrollView;