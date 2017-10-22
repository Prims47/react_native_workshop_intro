/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './src/components/home/Home'
import List from './src/components/list/List'

export default class App extends Component<{}> {
  render() {
    const Router = StackNavigator({
        Home: { screen: Home},
        List: { screen: List}
    });

    return (
      <Router />
    );
  }
}
