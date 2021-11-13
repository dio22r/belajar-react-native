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

import {StyleSheet, ImageBackground, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SectionLogin from '../components/SectionLogin';

const LoginPage: React.FC = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1,
      }}>
      <View style={styles.bannerWrapper}>
        <ImageBackground
          source={require('../img/banner.png')}
          resizeMode="cover"
          style={styles.imageBackground}
        />
      </View>
      <View style={styles.sectionWrapper}>
        <SectionLogin navigation={navigation} />
      </View>
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

export default LoginPage;
