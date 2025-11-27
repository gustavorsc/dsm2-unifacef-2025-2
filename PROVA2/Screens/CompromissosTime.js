import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

export default function CompromissosTimeScreen() {

    const compromissosTime = [
        {
            title: "(Eu)",
            data: [
                { id: '1', horario: '09h30', titulo: 'Reunião "Daily"' },
                { id: '2', horario: '14h00', titulo: 'Reunião com cliente Carros & Carros' },
                { id: '3', horario: '16h30', titulo: 'Prazo final Projeto X' },
            ],
        },
        {
            title: "Jurema (chefe)",
            data: [
                { id: '4', horario: '09h30', titulo: 'Reunião "Daily"' },
                { id: '5', horario: '12h00', titulo: 'Almoço com a diretoria' },
                { id: '6', horario: '15h00', titulo: 'Saída viagem' },
            ],
        },
        {
            title: "Aderbal",
            data: [
                { id: '7', horario: '09h30', titulo: 'Reunião "Daily"' },
                { id: '8', horario: '13h30', titulo: 'Visita técnica Uni-FACEF' },
                { id: '9', horario: '16h30', titulo: 'Prazo final Projeto X' },
            ],
        },
    ];

    const renderItem = ({ item }) => (
        <Text style={styles.item}>
            {item.horario}: {item.titulo}
        </Text>
    );

    const renderHeader = ({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.nome}>Gustavo Rodrigues Soares Costa</Text>
            <Text style={styles.turma}>Engenharia de Software 2023</Text>

            <View style={{ height: 10 }} />

            <SectionList
                sections={compromissosTime}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderSectionHeader={renderHeader}
                stickySectionHeadersEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    nome: { fontSize: 16, textAlign: 'center' },
    turma: { fontSize: 16, marginBottom: 12, textAlign: 'center' },

    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },

    item: {
        fontSize: 16,
        marginBottom: 16,
    },
});
