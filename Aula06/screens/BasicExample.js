import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';

export default function BasicExample() {
  // 🔹 Criação do estado
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => console.log("Enviado!")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green', // cuidado: 'Green' não é padrão (minúsculo)
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,          // ✅ use borderWidth + borderColor
    borderColor: '#444',
    padding: 6,
    borderRadius: 6,
    width: '80%',
  },
});
