/**
 * For React Navigation
 *
 * docs:
 * https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
