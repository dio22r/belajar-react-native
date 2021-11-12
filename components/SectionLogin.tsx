import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Text} from 'react-native';

const SectionLogin: React.FC = () => {
  let [count, setCount] = useState(0);
  function greeting() {
    setCount(count + 1);
  }

  return (
    <View style={styles.loginWrapper}>
      <TextInput style={styles.textInput} placeholder="Username" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <View style={styles.btnSubmitWrapper}>
        <Button onPress={greeting} title="Submit" />
      </View>
      <Text style={styles.textCount}>You tap: {count} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  btnSubmitWrapper: {
    width: 100,
    alignSelf: 'center',
  },
  loginWrapper: {
    marginTop: 100,
    width: 250,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textCount: {
    borderRadius: 10,
    backgroundColor: 'yellow',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
});

export default SectionLogin;
