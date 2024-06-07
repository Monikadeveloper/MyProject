/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
 
  StyleSheet,
  
} from 'react-native';


import Register from './Components/Register';
import Login from './Components/Login';

import Screen9 from './Components/Screen9';
import Screen10 from './Components/Screen10';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Home';
import Map from './Components/Map';
import Screen5 from './Components/Screen5';
import Screen6 from './Components/Screen6';





const Stack = createNativeStackNavigator();


function App(){


 
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Map' component={Map}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Help' component={Screen9}/>
        <Stack.Screen name='Security' component={Screen10}/>
        <Stack.Screen name='Events' component={Screen5}/>
        <Stack.Screen name='FAQ' component={Screen5}/>
        <Stack.Screen name='Educate' component={Screen6}/>
      
      </Stack.Navigator>

    </NavigationContainer>
  
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
