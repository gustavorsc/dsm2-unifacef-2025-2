import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imagem, setImagem] = useState(null);
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  async function abrirCamera() {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      <Image
        source={{
          uri: imagem
            ? imagem
            : 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'
        }}
        style={styles.avatar}
      />

      <View style={styles.botoes}>
        <Button title="Tirar Foto" onPress={abrirCamera} />
      </View>

      <View style={styles.botoes}>
        <Button title="Escolher da Galeria" onPress={abrirGaleria} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ddd'
  },
  botoes: {
    marginTop: 15,
    width: 180
  }
});
