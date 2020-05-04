import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default function Main() {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle = "dark-content"
            />

            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </>
    );
}
