import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation';
import CadastroScreen from './screens/CadastroScreen';
import BoasVindas from './screens/BoasVindas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Validação" component={FormValidation} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
