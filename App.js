import React from 'react';
import { StyleSheet, Text, View,  ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./app/img/waterbg.jpg')} style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </ImageBackground>
  );
}
x
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
