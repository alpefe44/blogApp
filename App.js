import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="List" component={ListScreen} options={{ headerTitleAlign: 'center' }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
