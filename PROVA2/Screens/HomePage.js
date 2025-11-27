import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do dia</Text>
            <Text style={styles.nome}>Gustavo Rodrigues Soares Costa</Text>
            <Text style={styles.turma}>Engenharia de Software 2023</Text>

            {/* Espaço maior antes do primeiro botão */}
            <View style={{ height: 30 }} />

            <Button
                title="Meus Compromissos"
                onPress={() => navigation.navigate('Compromissos')}
            />

            {/* Espaço entre os dois botões */}
            <View style={{ height: 16 }} />

            <Button
                title="Compromissos da equipe"
                onPress={() => navigation.navigate('TimeCompromissos')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    nome: { fontSize: 18 },
    turma: { fontSize: 18, marginTop: 4 },
});
