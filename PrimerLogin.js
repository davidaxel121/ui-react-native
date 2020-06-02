import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.images} source={require('./img/avatar.png')} />

      <View>
        <Text style={styles.texto}>Username</Text>
        <TextInput
          style={styles.inputs}
        />
        <Text style={styles.texto}>Password</Text>
        <TextInput
          style={styles.inputs}
        />
      </View>

      <View style={styles.lastContainer}>
        <Text style={[styles.texto, styles.texto1]}>Forgot password?</Text>
        <TouchableOpacity
          style={styles.boton}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={styles.texto}>New user? </Text>
          <Text style={[styles.texto, styles.texto2]}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283238',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  inputs: {
    width: 200,
    borderBottomColor: '#CE4378',
    borderWidth: 1,
    marginBottom: 20,
    borderRightColor: '#283238',
    borderTopColor: '#283238',
    borderLeftColor: '#283238'
  },
  texto: {
    color: '#627883',
    marginBottom: 10,
  },
  boton: {
    alignItems: 'center',
    backgroundColor: '#81C784',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  lastContainer: {
    width: 200
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  texto1: {
    marginLeft: 'auto',
  },
  texto2: {
    color: '#81C784',
    fontWeight: 'bold'
  }
});
