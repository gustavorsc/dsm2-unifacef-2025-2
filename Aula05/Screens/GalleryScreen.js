import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone no topo */}
      <Ionicons name="camera" size={40} color="purple" style={styles.icon} />

      {/* Galeria de imagens */}
      <ScrollView contentContainerStyle={styles.gallery}>
        <Image 
          source={{ uri: 'https://picsum.photos/id/1015/300/200' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://picsum.photos/id/1016/300/200' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://picsum.photos/id/1018/300/200' }} 
          style={styles.image} 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20
  },
  gallery: {
    alignItems: 'center',
    paddingBottom: 20
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  }
});
x