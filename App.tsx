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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const SectionLogin: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{
      marginTop: 100,
      width: 250,
      backgroundColor: "white",
      paddingTop: 20, paddingBottom: 20,
      paddingLeft: 5, paddingRight: 5,
      }}>
      <TextInput
        style={{margin: 10, borderColor: "black", borderWidth: 1, borderRadius: 10}}
        placeholder="Username"
      />
      <TextInput
        style={{margin: 10, borderColor: "black", borderWidth: 1, borderRadius: 10}}
        placeholder="Password"
      />
      <View style={{width:100, alignSelf: "center"}}>
        <Button
          style={{marginLeft:16}}
          title="Submit"
        />
      </View>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <View style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          flex: 1
        }}>
        <View style={{ flex: 2, backgroundColor: "red" }} >
          
        <ImageBackground source={require('./img/banner.jpg')} resizeMode="cover" style={{flex:1}}></ImageBackground>

        </View>
        <View style={{ flex: 4, backgroundColor: "#ccc", alignItems: "center" }} >
          <SectionLogin />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
