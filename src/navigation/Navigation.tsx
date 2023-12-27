import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
        screenOptions={
            {
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }
        }
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}