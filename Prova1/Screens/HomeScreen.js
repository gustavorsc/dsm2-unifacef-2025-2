import { View, Text, Button, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Gustavo Rodrigues Soares Costa</Text>
            <Button
                title="Ir para Icones"
                onPress={() => navigation.navigate('Icones')}
            />
            <Button
                title="Ir para Imagens local"
                onPress={() => navigation.navigate('Local')}
            />
            <Button
                title="Ir para Imagens Internet"
                onPress={() => navigation.navigate('Internet')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold' }
});