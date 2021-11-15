/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import {RootState} from '../src/app/store';
import {useSelector} from 'react-redux';

import TodoCard from '../components/TodoCard';

export interface todoJson {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const HomePage: React.FC = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  const username = useSelector((state: RootState) => state.login.username);

  const [apiData, setApiData] = useState<todoJson[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      axios.get<todoJson[]>(baseUrl).then(response => {
        setApiData(response.data);
      });
    };

    fetchUser();
  }, [baseUrl]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Todo Belajar React</Text>
        <Text style={styles.headerText}>Welcom! {username}</Text>
        {apiData.map(todo => (
          <TodoCard name={todo.title} completed={todo.completed} />
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
});

export default HomePage;
