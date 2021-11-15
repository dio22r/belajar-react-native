import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Text} from 'react-native';

const SectionLogin: React.FC = () => {
  let navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [boxstyle, setBoxstyle] = useState(styles.textInfo);

  const [showtext, setShowtext] = useState('Silahkan Login');

  function greeting() {
    if (username === '' && password === '') {
      setShowtext('Selamat Datang, Anda Berhasil Login');
      setBoxstyle(styles.textSuccess);
      navigation.navigate('Home');
    } else {
      setShowtext('Maaf Username dan Password Salah!');
      setBoxstyle(styles.textFail);
    }
  }

  return (
    <View style={styles.loginWrapper}>
      <TextInput
        onChangeText={text => setUsername(text)}
        style={styles.textInput}
        placeholder="Username"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        style={styles.textInput}
        placeholder="Password"
      />
      <View style={styles.btnSubmitWrapper}>
        <Button onPress={greeting} title="Submit" />
      </View>
      <Text style={boxstyle}>{showtext}</Text>
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
  textInfo: {
    borderRadius: 10,
    backgroundColor: 'cyan',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
  textSuccess: {
    borderRadius: 10,
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
  textFail: {
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
  },
});

export default SectionLogin;
