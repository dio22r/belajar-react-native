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
import {
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const SectionLogin: React.FC = () => {
  return (
    <View style={styles.loginWrapper}>
      <TextInput style={styles.textInput} placeholder="Username" />
      <TextInput style={styles.textInput} placeholder="Password" />
      <View style={styles.btnSubmitWrapper}>
        <Button title="Submit" />
      </View>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1,
      }}>
      <View style={styles.bannerWrapper}>
        <ImageBackground
          source={require('./img/banner.jpg')}
          resizeMode="cover"
          style={styles.imageBackground}
        />
      </View>
      <View style={styles.sectionWrapper}>
        <SectionLogin />
      </View>
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

  bannerWrapper: {
    zIndex: 2,
    top: 0,
    left: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
  },
  imageBackground: {
    flex: 1,
  },
  sectionWrapper: {
    marginTop: 200,
    flex: 4,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
});

export default App;
