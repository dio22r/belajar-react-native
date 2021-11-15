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
import {StyleSheet, View, Text} from 'react-native';
import TodoCard from '../components/TodoCard';

const HomePage: React.FC = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(baseUrl);
      setApiData(response.data.slice(0, 10));
    };

    fetchUser();
  }, [baseUrl]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo Belajar React</Text>
      {apiData.map(todo => (
        <TodoCard name={todo.title} completed={todo.completed} />
      ))}
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
