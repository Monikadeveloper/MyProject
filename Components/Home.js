import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import Navigator from './Navigator';




const Stack = createNativeStackNavigator();


function Home() {



    return (
        <>
            {/* <NavigationContainer> */}
                {/* <Navigator /> */}
                <BottomNavigator />
            {/* </NavigationContainer> */}

        </>
    );
}

const styles = StyleSheet.create({

});

export default Home;
