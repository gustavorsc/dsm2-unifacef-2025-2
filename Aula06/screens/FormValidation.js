import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormValidation({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const _erros = {};

    if (!email.includes('@')) {
      _erros.email = 'Digite um e-mail válido';
    }

    if (senha.length < 6) {
      _erros.senha = 'A senha deve ter no mínimo 6 caracteres';
    }

    setErros(_erros);

    // Se não houver erros, segue automaticamente para a tela BoasVindas
    if (Object.keys(_erros).length === 0) {
      navigation.navigate('BoasVindas', { userEmail: email });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 10 },
});
