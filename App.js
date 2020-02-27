import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>bla</Text>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
