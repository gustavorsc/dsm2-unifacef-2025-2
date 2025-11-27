import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomePage';
import CompromissosScreen from './Screens/Compromissos';
import CompromissosTimeScreen from './Screens/CompromissosTime';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Compromissos" component={CompromissosScreen} />
        <Stack.Screen name="TimeCompromissos" component={CompromissosTimeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};    