import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function CompromissosScreen() {
    const compromissos = [
        { id: '1', horario: '09h30', titulo: 'Reunião "Daily"' },
        { id: '2', horario: '14h00', titulo: 'Reunião com cliente Carros & Carros' },
        { id: '3', horario: '16h30', titulo: 'Prazo final Projeto X' },
    ];

    const renderItem = ({ item }) => (
        <Text style={styles.item}>
            {item.horario}: {item.titulo}
        </Text>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.eu}>(Eu)</Text>
            <Text style={styles.nome}>Gustavo Rodrigues Soares Costa</Text>
            <Text style={styles.turma}>Engenharia de Software 2023</Text>

            <View style={{ height: 20 }} />

            <FlatList
                data={compromissos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    eu: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
    nome: { fontSize: 16, marginTop: 4, textAlign: 'center' },
    turma: { fontSize: 16, marginBottom: 16, textAlign: 'center' },
    item: {
        fontSize: 16,
        marginBottom: 16,
    },
});
