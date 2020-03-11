import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeActivity from './pages/HomeActivity';

const NavStack = createStackNavigator(
    {
    
        Home : {screen : HomeActivity} 
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }

);

const Apps = createAppContainer(NavStack);

export default class App extends React.Component {
    render() {
        return <Apps />;
    }
};