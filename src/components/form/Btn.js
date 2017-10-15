import React, { Component } from 'react';
import {
  Button,
} from 'react-native';

export default class Btn extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title, accessibilityLabel: this.props.accessibilityLabel };
    }

    render() {
        return (
            <Button
              onPress={this.props.search}
              title={this.state.title}
              color={this.props.color}
              accessibilityLabel={this.state.accessibilityLabel}
            />
        );
    }
}
