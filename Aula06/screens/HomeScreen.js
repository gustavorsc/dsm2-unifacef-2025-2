import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Inicial</Text>
            <Button
                title="Ir para Exemplo Básico"
                onPress={() => navigation.navigate('Exemplo Básico')}
            />
            <Button
                title="Ir para Validação"
                onPress={() => navigation.navigate('Validação')}
            />
            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
