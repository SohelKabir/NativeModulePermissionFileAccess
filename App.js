/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  NativeModules,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CustomModule = NativeModules.ABC;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  CustomModule.show();
  CustomModule.checkAndGrantPermission(
    err => {
      // DeviceUtils.showAlert('Sorry', 'Access not granted');
      console.log('Access not granted');
    },
    res => {
      if (res) {
        // checkDirectoryAndDownload(url, name, ext);
        console.log('Res');
      }
    },
  );

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>HEllo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
