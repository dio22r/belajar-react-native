/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import TodoCard from '../components/TodoCard';

const HomePage: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.headerText}>Todo Belajar React</Text>
      <TodoCard name="Belajar React." completed={true} />
      <TodoCard name="Belajar React State." completed={true} />
      <TodoCard name="Belajar React Navigation." completed={true} />
      <TodoCard name="Belajar React Component Props." completed={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default HomePage;
