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
    const comments = [{
      author: 'Friedrich Nietzsche',
      comment: 'Adorei !'
    }, {
      author: 'David Hume',
      comment: 'Fascinante!'
    }, {
      author: 'Hermes Trismegisto',
      comment: 'Bom Diaa'
    }, {
      author: 'Arthur Schopenhauer',
      comment: 'Odiei...'
    }]
    return (
      <View style={{ flex: 1 }}>
      
      <Header />
      
      <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      
      </View>
    );
  }
}