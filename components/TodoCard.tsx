import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export interface TodoCardProps {
  name: string;
  completed: boolean;
}

const TodoCard: React.FC<TodoCardProps> = props => {
  let [checked, setChecked] = useState(props.completed);

  function toggle() {
    setChecked(!checked);
  }

  return (
    <View style={styles.checkboxContainer} key={props.key}>
      <TouchableOpacity
        style={checked ? styles.checkboxChecked : styles.checkbox}
        onPress={toggle}></TouchableOpacity>
      <Text style={styles.label} onPress={toggle}>
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
