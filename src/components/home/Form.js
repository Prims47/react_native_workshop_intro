import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
} from 'react-native';

import Input from '../form/Input';
import Btn from '../form/Btn';

import axios from 'axios';

import { API_URL } from '../../Constant';

export default class Form extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = { whereValue: "", priceValue: "", surfMin: "" };

        this.search = this.search.bind(this);
    }

    search() {
        let whereValue = this.state.whereValue;
        let priceValue= this.state.priceValue;
        let surfMin = this.state.surfMin;

        if (whereValue == "" && priceValue == "" && surfMin == "") {
            Alert.alert(
                'Error',
                'Veuillez remplir tout les champs du formulaire',
                [
                    {text: 'OK'},
                ],
                { cancelable: false }
            );

            return
        }

        let url = `${API_URL}${whereValue}&price_max=${priceValue}&size_min=${surfMin}`
        console.log("url: ", url);
        axios.get(url)
          .then(function (response) {
            console.log(response.data.response);
          })
          .catch(function (error) {
            console.log("ERROR:", error);
          });
    }

    changeWhere(whereValue) {
        this.setState({whereValue})
    }

    changePrice(priceValue) {
        this.setState({priceValue});
    }

    changeSurf(surfMin) {
        this.setState({surfMin});
    }

    render() {
        const searchWhere = (whereValue) => {this.changeWhere(whereValue)};
        const searchPrice = (priceValue) => {this.changePrice(priceValue)};
        const changeSurf = (surfMin) => {this.changeSurf(surfMin)};

        let color = (Platform.OS === 'ios') ? "#FFF" : "#FF2E2E"

        return (
            <View style={styles.container}>
                <Input placeholder="Où ?" searchInput={searchWhere} />
                <Input placeholder="Prix max" searchInput={searchPrice}/>
                <Input placeholder="Surface min" searchInput={changeSurf}/>
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
        height: 44,
        marginTop: 13,
    }
});
