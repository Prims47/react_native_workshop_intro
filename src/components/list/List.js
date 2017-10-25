import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import ListScreen from './ListScreen';
import MapScreen from './MapScreen';

export default class List extends Component<{}> {
    static navigationOptions = {
        headerTitle: <Image source={require('./images/Pentaheus2.png')} />,
        headerStyle: {backgroundColor: "#FF2E2E"},
        headerTintColor: "#FFF"
    }

    constructor(props) {
        super(props);

        const { state } = this.props.navigation;
        console.log("Screen list: ", state.params.listings);
        this.state = { listings: state.params.listings};
    }

    _renderItem = ({item}) => (
        <Advert item={item}/>
    );

    render() {
        const TabRouter = TabNavigator({
            ListScreen: { screen: ListScreen },
            MapScreen: { screen: MapScreen }
        }, {
            initialRouteName: 'ListScreen',
            animationEnabled: true,
            tabBarOptions: {
                activeTintColor: '#FF4242',
                inactiveTintColor: '#8E8E93',
            },
            tabBarPosition: "bottom",
            lazy:  true,
        });

        return (
            <TabRouter screenProps={this.state.listings}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
