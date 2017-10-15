import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from 'react-native';

import Input from '../form/Input';
import Btn from '../form/Btn';

import axios from 'axios';

import { API_URL } from '../../Constant';

export default class Form extends Component<{}> {
    search() {
        let url = `${API_URL}paris`
        axios.get(url)
          .then(function (response) {
            console.log(response.data.response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

export default class Form extends Component<{}> {
    render() {
        let color = (Platform.OS === 'ios') ? "#FFF" : "#FF2E2E"

        return (
            <View style={styles.container}>
                <Input placeholder="Où ?"/>
                <Input placeholder="Prix max"/>
                <Input placeholder="Surface min"/>
                <View style={styles.warrantyWrapper}>
                    <Text style={styles.warranty}>Pentaheus vous garantie les meilleurs prix</Text>
                </View>
                <View style={styles.buttonWrapper}>
                <Btn title="RECHERCHER" accessibilityLabel="RECHERCHER" search={this.search}
                    color={color}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 0,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        height: 47,
        paddingLeft: 11.5,
    },
    warrantyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    warranty: {
        color: '#D8D7DC',
    },
    buttonWrapper: {
        backgroundColor: '#FF2E2E',
        marginTop: 13,
    },
});
