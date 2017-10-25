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

        this.state = { listings: this.props.screenProps, latitude: null, longitude: null };
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

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("position: ", position.coords);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

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
