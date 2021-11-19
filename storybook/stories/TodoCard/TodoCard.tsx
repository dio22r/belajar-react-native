import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export interface TodoCardProps {
  id: number;
  name: string;
  completed: boolean;
  color: string;
}

const TodoCard: React.FC<TodoCardProps> = props => {
  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 20,
      paddingBottom: 20,
      paddingTop: 20,
      borderBottomColor: props.color,
      borderBottomWidth: 2,
    },
    checkboxChecked: {
      width: 20,
      height: 20,
      borderColor: 'white',
      backgroundColor: props.color,
      borderWidth: 4,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderColor: props.color,
      backgroundColor: 'white',
      borderWidth: 2,
    },
    label: {
      marginLeft: 20,
    },
  });

  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={props.completed ? styles.checkboxChecked : styles.checkbox}
        ></TouchableOpacity>
      <Text style={styles.label}>{props.name}</Text>
    </View>
  );
};

export default TodoCard;
