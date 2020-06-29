import Lion from './Lion.jpg';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';

export default class AnimatedScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentInput: 0,
      animationScale: new Animated.Value(.75),
    }
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => {
      if (this.props.updateList) {
        this.props.updateList(this.state.currentInput)
      }
    }, 1000);
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
    this.animation.stop();
  }

  startAnimation() {
    const growAnimation = Animated.timing(this.state.animationScale, {
      toValue: 1.75,
      duration: 750,
      useNativeDriver: false,
    });
    const shrinkAnimation = Animated.timing(this.state.animationScale, {
      toValue: .75,
      duration: 750,
      useNativeDriver: false,
    });
    const sequence = Animated.sequence([
      growAnimation,
      shrinkAnimation
    ]);

    this.animation = Animated.loop(sequence, -1);
    this.animation.start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: 'center', color: "#000", fontSize: 24 }}>Try and update the list:</Text>
        <TextInput style={styles.inputBox}
                   onChangeText={(text) => { this.setState({ currentInput: text }) }} />
        <TouchableOpacity style={styles.button}
          onPress={this.props.onClose}>
          <Text style={styles.buttonText}>
            Close
          </Text>
        </TouchableOpacity>
        <View style={{height: 200}}/>
        <Animated.Image style={[styles.image, {transform: [{scaleX: this.state.animationScale}, {scaleY: this.state.animationScale}]}]}
                        source={Lion}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ddd',
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

  image: {
    width: 150,
    height: 125,
    borderWidth: 3,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: "#000000",
  },
});