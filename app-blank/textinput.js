import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    Platform,
} from "react-native";

const App = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");

    const mostrarAlerta = () => {
        if (!nombre || !email || !password) {
            if (Platform.OS === "web") {
                window.alert("Por favor completa todos los campos obligatorios");
            } else {
                Alert.alert(
                    "Error",
                    "Por favor, complete todos los campos obligatorios",
                    [{ text: "Ok" }]
                );
            }
        } else {
            if (Platform.OS === "web") {
                window.alert(`Registro exitoso \n Nombre: ${nombre} \n Email: ${email}`);
                limpiarFormulario();
            } else {
                Alert.alert(
                    "Registro exitoso",
                    `Nombre: ${nombre} \n Email: ${email}`,
                    [{ text: "Ok", onPress: () => limpiarFormulario() }]
                );
            }
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Registro de usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo *"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email *"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña *"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono (Opcional)"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />
                <Button title="Registrarse" onPress={mostrarAlerta} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    formulario: {
        backgroundColor: "#CCFF00",
        padding: 20,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: "white",
    },
});

export default App;