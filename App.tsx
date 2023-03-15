/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View>
      <Cat />
    </View>
  );
};

class Cat extends Component {
  render() {
    return (
      <View>
        <Text>Hello, I am ...</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue="Name me!"
        />
      </View>
    );
  }
}
export default HelloWorldApp;
