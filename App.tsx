import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connectDb } from '@database/configs/connectDb';

export default function App() {

  useEffect(() => {
    const initializeDatabase = async () => {
      await connectDb();
    };

    initializeDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Dev Estoque Sujeito P</Text>
      <StatusBar style="auto" />
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
