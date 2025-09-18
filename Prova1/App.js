import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import InternetImageScreen from './Screens/InternetImageScreen';
import LocalImageScreen from './Screens/LocalImageScreen';
import IconScreen from './Screens/IconScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Internet" component={InternetImageScreen} />
        <Stack.Screen name="Local" component={LocalImageScreen} />
        <Stack.Screen name="Icones" component={IconScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};