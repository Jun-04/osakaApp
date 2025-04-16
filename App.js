import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//trying to make it easy to see which is libraly and file
import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';
import TriviaScreen from './screens/TriviaScreen';
import CustomHeader from './components/CustomHeader';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <CustomHeader />,
          headerLeft: null,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: '' }} //check if theres any good solution for this later
        />
        <Stack.Screen
          name="CardScreen"
          component={CardScreen}
          options={{ headerTitle: '' }} 
        />
        <Stack.Screen
          name="TriviaScreen"
          component={TriviaScreen}
          options={{ headerTitle: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}