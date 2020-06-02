import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Pantalla() {
  return (
    <View style={styles.container}>
        <Image source={require('./img/avatar.png')} />
      <Text>Texto en Javascript</Text>
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
