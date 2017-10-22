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

export default class Form extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = { whereValue: "", priceValue: "", surfMin: "" };

        this.search = this.search.bind(this);
    }

    search() {
        console.log("Log:", this.state)
        let url = `${API_URL}paris`
        // axios.get(url)
        //   .then(function (response) {
        //     console.log(response.data.response);
        //   })
        //   .catch(function (error) {
        //     console.log("ERROR:", error);
        //   });
    }

    changeWhere(whereValue) {
        this.setState({whereValue})
    }

    render() {
        const searchWhere = (whereValue) => {this.changeWhere(whereValue)};

        return (
            <View style={styles.container}>
                <Input placeholder="Où ?" searchInput={searchWhere} />
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
        height: 44,
        marginTop: 13,
    }
});
