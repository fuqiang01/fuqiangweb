import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Test from './components/Test';
import {Provider} from 'react-redux';
import store from './redux/store'

export default () => {
    return (
        // <Provider store={store as any}>
        //     <Test />   
        // </Provider>
        <Text onPress = { () => {console.log('点击了')}}>aaaaaa</Text>
    );
}