import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}