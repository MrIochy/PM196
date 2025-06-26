//imp
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native-web';

export default function App() {
    const [cargando, setCargando] = useState(false);
    const [datos, setDatos] = useState('');

    const SimularCarga = () => {
        setCargando(true);
        setDatos('');

        setTimeout(() => {
            setCargando(false);
            setDatos('Datos cargados correctamente');
        }, 1000);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Activity Indicator</Text>
            <Button title="Iniciar Carga" onPress={SimularCarga} color='#007AFF'/>

            {cargando && (
            <ActivityIndicator size='large' color='#007AFF' style={styles.loader}/>
            )}

            {datos !== '' && <Text>{datos}</Text>}
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccff00',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    loader: {
        marginVertical: 20,
    },  
});