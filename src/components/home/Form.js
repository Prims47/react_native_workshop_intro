import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class Form extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = { placeholder: 'Où ?' };
    }

    render() {
        return (
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder={this.state.placeholder}
            />
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
    }
});
