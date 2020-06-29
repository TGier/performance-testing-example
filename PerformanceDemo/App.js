/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ExampleList/>
      </View>
    </>
  );
};

class ExampleList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    }
    this.boundRenderItem = this.renderItem.bind(this);
  }

  // This is a grossly inefficient example used to illustrate a point. Don't write code like this!
  setDataInefficient = () => {
    let count = 0;
    try {
      count = parseInt(this.state.currentInput);
    } catch (e) {
      console.debug("Please enter just a number! Setting to empty list");
    }

    const newData = [];
    let curNum = 0;
    while (curNum < count) {
      newData.push(Math.floor(Math.random()*16777215).toString(16));
      curNum++;
      this.setState({
        data: newData,
      });
    }
  }

  setDataEfficient = () => {
    let count = 0;
    try {
      count = parseInt(this.state.currentInput);
    } catch (e) {
      console.debug("Please enter just a number! Setting to empty list");
    }

    const newData = [];
    let curNum = 0;
    while (curNum < count) {
      newData.push(Math.floor(Math.random()*16777215).toString(16));
      curNum++;
    }

    this.setState({
      data: newData,
    });
  }

  renderItem(obj) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return (
      <View style={[styles.item, {backgroundColor: '#'+obj.item}]}>
        <Text style={styles.itemText}>{obj.item}</Text>
      </View>
    );
  }

  render() {
    return (
      <>
        <Text style={{alignSelf: 'center', color: "#000", fontSize: 24}}>Enter number of cells to generate:</Text>
        <TextInput style={styles.inputBox}
                   onChangeText={(text) => {this.setState({currentInput: text})}}/>
        <TouchableOpacity style={styles.button}
                          onPress={this.setDataInefficient}>
          <Text style={styles.buttonText}>
            Inefficient Render
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
                          onPress={this.setDataEfficient}>

          <Text style={styles.buttonText}>
            Efficient Render
          </Text>
        </TouchableOpacity>
        <FlatList data={this.state.data}
                  renderItem={this.boundRenderItem}
                  keyExtractor={(item, index) => 'cell' + item}/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25, 
    flex: 1, 
    flexGrow: 1, 
    backgroundColor: "#cccccc"
  },

  labelText: {
    alignSelf: 'center', 
    color: "#000", 
    fontSize: 18
  },

  button: {
    marginVertical: 5,
    width: 150, 
    height: 50, 
    borderWidth: 3, 
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    borderRadius: 8,
  },

  buttonText: {
    color: "#ffffff", 
    fontSize: 14
  },

  inputBox: {
    marginVertical: 10,
    width: 150, 
    height: 50, 
    borderWidth: 3, 
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },

  item: {
    width: 100,
    height: 30,
    borderWidth: 3,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:  5,
    borderColor: "#ffffff",
    backgroundColor: "#000000",
  },

  itemText: {
    color: "#ffffff", 
    fontSize: 18
  },
});

export default App;
