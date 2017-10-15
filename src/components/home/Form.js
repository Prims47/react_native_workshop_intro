import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Input from '../form/Input';

export default class Form extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Input placeholder="Où ?"/>
                <Input placeholder="Prix max"/>
                <Input placeholder="Surface min"/>
                <View style={styles.warrantyWrapper}>
                    <Text style={styles.warranty}>Pentaheus vous garantie les meilleurs prix</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 0,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        height: 47,
        paddingLeft: 11.5,
    },
    warrantyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    warranty: {
        color: '#D8D7DC',
    }
});
