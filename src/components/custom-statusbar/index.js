import React from 'react';

import {
    View,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';


const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const STATUSBAR_HEIGHT = Platform.select({
    ios: isIPhoneX() ? 44 : 44,
    android: StatusBar.currentHeight,
    default: 0
})

export const MyStatusBar = (props) => {
    // console.log('status bar height====>', STATUSBAR_HEIGHT);
    return (
        <View style={{
            height: STATUSBAR_HEIGHT,
            backgroundColor: '#194880'  //change color of status bar as per need
        }}>
            <StatusBar translucent backgroundColor="#fff" barStyle="light-content" />
        </View>
    )

};
