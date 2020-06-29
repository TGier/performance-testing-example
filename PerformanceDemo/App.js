/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import ExampleList from './ExampleList.js'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <AppComponent/>
  );
};

class AppComponent extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1}}>
          <ExampleList/>
        </View>
      </>
    );
  };
} 

export default App;
