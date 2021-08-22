import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Informacion from "./src/components/Informacion"
import Pie from "./src/components/Pie"
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Informacion/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
});