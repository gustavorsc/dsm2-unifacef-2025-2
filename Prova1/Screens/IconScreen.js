import { View, Text, StyleSheet, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function IconScreen({navigation}) {
    return (
        <View style={styles.container}>
            <FontAwesome name="home" size={40} color="blue" />
            <FontAwesome name="beach" size={40} color="red" />
            <FontAwesome name="camera" size={40} color="yellow" />

        </View>


    );
}
const styles = StyleSheet.create({
    container: { flex: 'row', flexDirection: 'row', justifyContent: 'space-around'},
    texto: { fontSize: 20, marginTop: 10 },
});
