import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import Form from './Form';

export default class Home extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground style={styles.backImage} source={require('./images/appart_bg.png')}>
                <View style={styles.form}>
                    <Form />
                </View>
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
    },
    form: {
        backgroundColor: "#FFF",
        width: 315,
        height: 224,
        marginTop: 93,
        marginLeft: 29,
    }
});
