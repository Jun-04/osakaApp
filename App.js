import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
          headerTitleAlign: 'left',
          headerRight: () => <CustomHeader />,
          headerLeft: () => null,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '' }} />
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ title: 'Osaka Dialects' }} />
        <Stack.Screen name="TriviaScreen" component={TriviaScreen} options={{ title: 'Trivia' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
