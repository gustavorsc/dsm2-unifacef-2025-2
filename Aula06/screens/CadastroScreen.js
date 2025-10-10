import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    let novoErro = {};

    if (!nome.trim()) novoErro.nome = 'Informe seu nome completo';
    if (!email.includes('@')) novoErro.email = 'Digite um e-mail válido';
    if (senha.length < 6) novoErro.senha = 'A senha deve ter no mínimo 6 caracteres';
    if (senha !== confirmar) novoErro.confirmar = 'As senhas não coincidem';
    if (!/^[0-9]+$/.test(telefone)) novoErro.telefone = 'O telefone deve conter apenas números';

    setErros(novoErro);

    // Se não houver erros, vai para a tela de BoasVindas
    if (Object.keys(novoErro).length === 0) {
      navigation.navigate('BoasVindas', {
        nome,
        email,
        telefone,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
      />
      {erros.confirmar && <Text style={styles.erro}>{erros.confirmar}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="numeric"
      />
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
  },
  erro: { color: 'red', marginBottom: 6 },
});
