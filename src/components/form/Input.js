import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Input extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = { placeholder: this.props.placeholder};

        this.filter = this.filter.bind(this);
    }

    render() {
        return (
            <TextInput
                style={styles.input}
                onChangeText={(value) => this.filter(value)}
                value={this.state.value}
                placeholder={this.state.placeholder}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        );
    }

    filter(value) {
        this.setState({value});
        this.props.searchInput(value);
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
