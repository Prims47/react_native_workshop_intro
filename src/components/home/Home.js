import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import Form from './Form';

export default class Home extends Component<{}> {
    static navigationOptions = {
        headerTitle: <Image source={require('./images/Pentaheus.png')} />,
        headerStyle: {backgroundColor: "#FFF"}
    }

    constructor(props) {
        super(props);

        this.state = { listings: []};
    }

    success(listings) {
        if (!Array.isArray(listings) || listings.length < 1) {
            Alert.alert(
                'Error',
                'No result. Retry please',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            );

            return
        }

        this.setState({listings});

        const { navigate } = this.props.navigation;
        navigate("List", {listings});
    }

    render() {
        const success = (listings) => {this.success(listings)};

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backImage} source={require('./images/appart_bg.png')}>
                    <View style={styles.form}>
                        <Form success={success}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backImage: {
        flex: 1,
        width: null,
        height: null,
    },
    form: {
        backgroundColor: "#FFF",
        width: 315,
        height: 224,
        marginTop: 93,
        marginLeft: 29,
    }
});
