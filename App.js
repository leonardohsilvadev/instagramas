import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      
      <Header />
      
      <Post image={require('./assets/imgs/fence.jpg')} />
      
      </View>
    );
  }
}