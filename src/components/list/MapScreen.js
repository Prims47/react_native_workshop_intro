import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

export default class MapScreen extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = { listings: this.props.screenProps};
    }

    static navigationOptions = {
        tabBarLabel: 'Map',
        // Note: Par defaut l'icon est afficher seulement sur iOS
        tabBarIcon: ({ tintColor, focused }) => (
            <Image
                source={focused ? require('./images/map_selected.png') : require('./images/map.png' )}
                style={styles.icon}
            />
        ),

    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Map</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
