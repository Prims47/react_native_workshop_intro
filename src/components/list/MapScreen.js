import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 48.862725;
const LONGITUDE = 2.287592000000018;
const LATITUDE_DELTA = 0.0822;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const pin_unselected = require('./images/pin_unselected.png')
const pin_selected = require('./images/pin.png')

export default class MapScreen extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = { listings: this.props.screenProps, latitude: LATITUDE, longitude: LONGITUDE, userLocation: null};
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
                    userLocation: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    onPressMarker(e, index) {
        this.setState({selectedMarkerIndex: index});
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUDE_DELTA,
                    }}
                    style={styles.map}
                    showsUserLocation={false}
                >
                    {
                        this.state.userLocation != null && this.state.userLocation.latitude != null
                        && this.state.userLocation.longitude != null ?
                        <MapView.Marker coordinate={{"latitude": this.state.userLocation.latitude,
                            "longitude": this.state.userLocation.longitude}}
                            image={require('./images/current_position.png')} /> : null
                    }
                  {this.state.listings.map((marker, index) => (
                    <MapView.Marker
                      coordinate={{"latitude": marker.latitude, "longitude": marker.longitude}}
                      image={this.state.selectedMarkerIndex === index ? pin_selected : pin_unselected}
                      onPress={(e) => this.onPressMarker(e, index)}
                      key={`marker-${index}`}
                    />
                  ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
