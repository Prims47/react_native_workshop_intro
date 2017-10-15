import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

export default class Home extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground style={styles.backImage} source={require('./images/appart_bg.png')}>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backImage: {
        flex: 1,
        width: null,
        height: null,
    }
});
