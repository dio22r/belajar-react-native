/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import {RootState} from '../src/app/store';
import {useDispatch, useSelector} from 'react-redux';

import TodoCard from '../components/TodoCard';
import {fetchTodos} from '../src/features/reducer/todos';

export interface todoJson {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const HomePage: React.FC = () => {
  const username = useSelector((state: RootState) => state.login.username);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const isLoading = useSelector((state: RootState) => state.todos.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [username]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Todo Belajar React</Text>
        <Text style={styles.headerText}>Selamat Datang! {username}</Text>
        {isLoading && <Text style={styles.loading}>Loading . . .</Text>}
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            id={todo.id}
            name={todo.title}
            completed={todo.completed}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  loading: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: 'green',
    color: 'white',
  },
});

export default HomePage;
