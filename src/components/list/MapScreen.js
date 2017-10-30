import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';
import Advert from './Advert';

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

        this.state = { listings: this.props.screenProps, latitude: LATITUDE, longitude: LONGITUDE, userLocation: null,
            currentAdvert: null, hasSelected: false
        };

        this._closeDetail = this._closeDetail.bind(this);
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
        this.setState({selectedMarkerIndex: index, currentAdvert: this.state.listings[index], hasSelected: true});
    }

    _closeDetail() {
        this.setState({selectedMarkerIndex: null, currentAdvert: null, hasSelected: false});
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
                <View style={this.state.hasSelected ? styles.detailAdvert : styles.noDetailAdvert}>
                    {this.state.currentAdvert != null ?
                    <ImageBackground style={styles.backImage} source={{uri: this.state.currentAdvert.img_url}}>
                        <TouchableOpacity onPress={this._closeDetail}>
                            <Image source={require('./images/close.png')} style={styles.close}/>
                        </TouchableOpacity>
                        <View style={styles.detailWrapper}>
                            <View style={styles.priceWrapper}>
                                <Text style={styles.price}>{this.state.currentAdvert.price_formatted}</Text>
                            </View>
                            <View style={styles.infoWrapper}>
                                <Text style={styles.size}>{this.state.currentAdvert.size} {this.state.currentAdvert.size_unit}</Text>
                                <Text style={styles.room}>{this.state.currentAdvert.room_number} pièce(s)</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    : null}
                </View>
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
    },
    noDetailAdvert: {
        display: "none",
    },
    detailAdvert: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 183,
    },
    backImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    detailWrapper: {
        position: 'absolute',
        bottom: 16,
        right: 0,
        left: 0,
        height: 55,
        backgroundColor: "#FF4242",
    },
    priceWrapper: {
        flexDirection: "row",
    },
    price: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold",
    },
    size: {
        color: "#FFF",
        fontSize: 12,
    },
    room : {
        color: "#FFF",
        fontSize: 12,
    },
    close: {
        height: 23,
        width: 23,
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
