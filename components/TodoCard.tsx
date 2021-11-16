import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateTodos} from '../src/features/reducer/todos';

export interface TodoCardProps {
  id: number;
  name: string;
  completed: boolean;
}

const TodoCard: React.FC<TodoCardProps> = props => {
  const dispatch = useDispatch();

  function toggle(id: number) {
    dispatch(updateTodos(id));
  }

  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={props.completed ? styles.checkboxChecked : styles.checkbox}
        onPress={() => {
          toggle(props.id);
        }}></TouchableOpacity>
      <Text
        style={styles.label}
        onPress={() => {
          toggle(props.id);
        }}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    borderColor: 'white',
    backgroundColor: 'black',
    borderWidth: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  label: {
    marginLeft: 20,
  },
});

export default TodoCard;
