import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class List extends Component<{}> {
    static navigationOptions = {
        headerTitle: <Image source={require('./images/Pentaheus2.png')} />,
        headerStyle: {backgroundColor: "#FF2E2E"},
        headerTintColor: "#FFF"
    }

    constructor(props) {
        super(props);

        const { state } = this.props.navigation;
        console.log("Screen list: ", state.params.listings);
        this.state = { listings: state.params.listings};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>LIST</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
