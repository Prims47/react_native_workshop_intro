import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import Advert from './Advert';

export default class ListScreen extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = { listings: this.props.screenProps};
    }

    static navigationOptions = {
        tabBarLabel: 'List',
        // Note: Par defaut l'icon est afficher seulement sur iOS
        tabBarIcon: ({ tintColor, focused }) => (
            <Image
                source={focused ? require('./images/list_selected.png') : require('./images/list.png' )}
                style={styles.icon}
            />
        ),

    };

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
