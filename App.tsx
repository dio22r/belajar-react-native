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
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/app/store';
import {Provider} from 'react-redux';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
