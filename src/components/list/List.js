import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import Advert from './Advert';

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

    _renderItem = ({item}) => (
        <Advert item={item}/>
    );

    render() {
        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.listings}
                renderItem={this._renderItem}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
