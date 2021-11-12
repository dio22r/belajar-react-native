/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';

import {StyleSheet, View, Button, Text} from 'react-native';

const HomePage: React.FC = () => {
  let [text, setText] = useState('test');

  function pressbutton() {
    setText('Pressed');
  }

  return (
    <View style={{flex:1, backgroundColor:'red'}}>
      <View style={{flex:5, backgroundColor:'yellow'}} >

      </View>
      <View style={{width: 200, flex:1, backgroundColor:'blue',zIndex:2}}>
        <Button title="Login" onPress={pressbutton} />
      </View>
      
      <Text style={{flex: 1}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerWrapper: {
    zIndex: 2,
    top: 0,
    left: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default HomePage;
