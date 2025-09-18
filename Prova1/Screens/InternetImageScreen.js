
import { View, Image, StyleSheet, Button } from 'react-native';
export default function InternetImageScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image
            source={{ uri: 'https://picsum.photos/id/1015/300/200' }}
            style={{width: 200, height: 200, marginBottom: 50}}
            />

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'top', alignItems: 'center', backgroundColor: '#007AFF' },
    imagem: { width: 200, height: 200, resizeMode: 'contain' }
});
