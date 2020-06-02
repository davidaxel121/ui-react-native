import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Username</Text>
        <TextInput style={styles.inputs} />
        <TextInput
          style={[styles.inputs, styles.input2]}
          placeholder="Password"
        />
      </View>

      <View style={styles.lastContainer}>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textosBoton}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={[styles.texto, styles.texto1]}>No account yet? Create one</Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textosBoton}>DEMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: 200,
    borderBottomColor: "#fff",
    borderRightColor: "#4CAF50",
    borderTopColor: "#4CAF50",
    borderLeftColor: "#4CAF50",
    borderWidth: 1,
    marginBottom: 20,
  },
  input2: {
    borderBottomColor: "#ccc",
  },
  texto: {
    color: "#fff",
    marginBottom: 10,
  },
  boton: {
    alignItems: "center",
    backgroundColor: "#388E3C",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: "#fff"
  },
  lastContainer: {
    width: 200,
  },
  texto1: {
    textAlign: "center",
    color: "#C0E2C1"
  },
  textosBoton:{
    color: "#fff"
  }
});
