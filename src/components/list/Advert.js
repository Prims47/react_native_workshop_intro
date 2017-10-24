import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Advert extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {item: this.props.item};
    }

    render() {
        const advert = this.state.item;

        return (
            <View style={styles.container}>
                <View style={styles.topAdvert}>
                    <Image source={{uri: advert.img_url}}
                        style={styles.photo} />
                    <Text style={styles.price}>{advert.price_formatted}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.size}>{advert.size} {advert.size_unit}</Text>
                    <Text style={styles.room}>{advert.room_number} pièce(s)</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
    },
    topAdvert: {
        flexDirection: "row",
    },
    photo: {
        width: 118,
        height: 89,
        marginLeft: 10,
        marginTop: 10,
    },
    price: {
        marginLeft: 20,
        marginTop: 13,
        fontSize: 17,
        color: "#FF4242",
        fontWeight: "bold",
    },
    info: {
        flexDirection: "row",
        marginLeft: 146,
        marginBottom: 10,
    },
    room: {
        fontWeight: "bold",
    },
    size: {
        fontWeight: "bold",
        marginRight: 60,
    }
});
